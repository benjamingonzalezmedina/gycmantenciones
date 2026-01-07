interface CacheEntry<T> {
  value: T;
  expiry: number;
}

class Cache {
  private readonly defaultTTL: number = 3600000;

  set<T>(key: string, value: T, ttl: number = this.defaultTTL): void {
    const expiry = Date.now() + ttl;
    const entry: CacheEntry<T> = { value, expiry };

    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  }

  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`cache_${key}`);

      if (!item) {
        return null;
      }

      const entry: CacheEntry<T> = JSON.parse(item);

      if (Date.now() > entry.expiry) {
        this.delete(key);
        return null;
      }

      return entry.value;
    } catch (error) {
      console.error('Error getting cache:', error);
      return null;
    }
  }

  delete(key: string): void {
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      console.error('Error deleting cache:', error);
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  cleanExpired(): void {
    try {
      const keys = Object.keys(localStorage);
      const now = Date.now();

      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          const item = localStorage.getItem(key);
          if (item) {
            try {
              const entry: CacheEntry<unknown> = JSON.parse(item);
              if (now > entry.expiry) {
                localStorage.removeItem(key);
              }
            } catch {
              localStorage.removeItem(key);
            }
          }
        }
      });
    } catch (error) {
      console.error('Error cleaning expired cache:', error);
    }
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}

export const cache = new Cache();

setInterval(() => {
  cache.cleanExpired();
}, 300000);
