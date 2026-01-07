# GYC Mantención SPA - Sitio Web Corporativo

Sitio web oficial de GYC Mantención SPA, empresa especializada en mantenimiento industrial y montaje mecánico en el sector hidroeléctrico.

## Características Principales

### Funcionalidades Core
- **Página Web Completa**: Sitio corporativo multipágina con navegación suave
- **Sistema de Contacto Flotante**: Botón flotante con formulario de contacto rápido
- **Formularios de Contacto**: Sistema de formularios con rate limiting
- **Canal de Denuncias**: Sección dedicada para reportes confidenciales
- **Sección de Postulaciones**: Formulario para aplicar a vacantes

### Funcionalidades Avanzadas

#### 🌓 Dark/Light Mode
Sistema completo de temas claro/oscuro:
- Toggle en el header (desktop y mobile)
- Persistencia en localStorage
- Detección automática de preferencias del sistema
- Transiciones suaves entre temas
- Soporte completo en todos los componentes

#### 🔒 Rate Limiting
Protección contra uso excesivo implementada en:
- Formulario de contacto flotante
- Configuración: 10 solicitudes por minuto
- Ventana deslizante de 60 segundos
- Reseteo automático
- Mensajes de error informativos

Uso:
```typescript
import { rateLimiter } from './utils/rateLimit';

if (rateLimiter.check('action-key')) {
  // Acción permitida
} else {
  // Límite alcanzado
}

const remaining = rateLimiter.getRemainingRequests('action-key');
const timeUntilReset = rateLimiter.getTimeUntilReset('action-key');
```

#### 💾 Cache con localStorage
Sistema de caché inteligente con expiración automática:
```typescript
import { cache } from './utils/cache';

// Guardar datos con TTL de 1 hora
cache.set('key', data, 3600000);

// Obtener datos
const data = cache.get('key');

// Verificar existencia
const exists = cache.has('key');

// Eliminar específico
cache.delete('key');

// Limpiar todo el caché
cache.clear();

// Limpiar solo datos expirados
cache.cleanExpired();
```

Características:
- TTL configurable (default: 1 hora)
- Expiración automática
- Limpieza automática cada 5 minutos
- Prefijo automático `cache_` para evitar colisiones
- Manejo robusto de errores

#### 🍪 Manejo de Cookies
Gestión completa de cookies con configuración avanzada:
```typescript
import { cookies } from './utils/cookies';

// Crear cookie
cookies.set('name', 'value', {
  days: 7,
  path: '/',
  secure: true,
  sameSite: 'Lax'
});

// Obtener cookie
const value = cookies.get('name');

// Verificar existencia
const exists = cookies.has('name');

// Eliminar cookie
cookies.delete('name');

// Obtener todas las cookies
const all = cookies.getAll();

// Limpiar todas las cookies
cookies.clear();
```

Características:
- Configuración de expiración flexible
- Soporte para `secure` y `SameSite`
- Encoding/decoding automático
- Manejo de paths y dominios
- Métodos CRUD completos

## Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconografía
- **Context API** - Gestión de estado global (tema)

## Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── Header.tsx     # Navegación con toggle de tema
│   ├── Hero.tsx       # Sección hero
│   ├── Stats.tsx      # Estadísticas
│   ├── Services.tsx   # Servicios
│   ├── Values.tsx     # Valores corporativos
│   ├── About.tsx      # Sobre nosotros
│   ├── Certifications.tsx  # Certificaciones
│   ├── Policies.tsx   # Políticas
│   ├── Careers.tsx    # Postulaciones
│   ├── Whistleblower.tsx  # Canal de denuncias
│   ├── Contact.tsx    # Contacto
│   ├── Footer.tsx     # Pie de página
│   └── FloatingContactButton.tsx  # Botón flotante con formulario
├── contexts/          # Contextos de React
│   └── ThemeContext.tsx  # Context para dark/light mode
├── hooks/             # Custom hooks
│   └── useScrollAnimation.ts  # Hook para animaciones en scroll
├── utils/             # Utilidades
│   ├── rateLimit.ts   # Rate limiting
│   ├── cache.ts       # Cache con localStorage
│   └── cookies.ts     # Manejo de cookies
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Configuración

### Dark Mode
El tema se configura automáticamente según las preferencias del sistema del usuario y se persiste en localStorage. Los usuarios pueden alternar manualmente usando el botón en el header.

### Rate Limiting
Para ajustar los límites de rate limiting, edita el archivo `src/utils/rateLimit.ts`:

```typescript
// Crear instancia personalizada
export const rateLimiter = new RateLimiter(
  10,      // máximo de solicitudes
  60000    // ventana de tiempo en ms (60 segundos)
);
```

### Cache TTL
Para ajustar el TTL por defecto del caché, edita `src/utils/cache.ts`:

```typescript
class Cache {
  private readonly defaultTTL: number = 3600000; // 1 hora en ms
}
```

## Secciones del Sitio

### 1. Inicio
- Hero section con llamadas a la acción
- Estadísticas de la empresa
- Navegación a secciones principales

### 2. Servicios
- Mantenimiento y Montaje Mecánico Industrial
- Servicios Eléctricos e Instrumentación
- Construcción de Obras Civiles
- Diseño y Fabricación de Estructuras Metálicas

### 3. Valores Corporativos
- Compromiso
- Seguridad
- Excelencia
- Trabajo en Equipo
- Mejora Continua
- Integridad

### 4. Nosotros
- Historia de la empresa
- Misión y Visión
- Fortalezas competitivas

### 5. Certificaciones
- ISO 9001:2015
- ISO 45001
- ISO 14001
- SEC Clase A
- Registro CCHC
- Mutual de Seguridad

### 6. Políticas Corporativas
- Seguridad y Salud Ocupacional
- Calidad
- Medioambiental
- Recursos Humanos
- Confidencialidad
- Ética y Compliance

### 7. Trabaja con Nosotros
- Formulario de postulación
- Áreas de trabajo disponibles
- Beneficios de trabajar en GYC

### 8. Canal de Denuncias
- Sistema confidencial de reportes
- Compromisos de la empresa
- Contacto directo

### 9. Contacto
- Información de contacto
- Ubicación
- Horarios de atención
- Proceso de trabajo

## Botón Flotante de Contacto

El botón flotante incluye:
- Formulario rápido de contacto con rate limiting
- Enlace directo a teléfono
- Enlace directo a email
- Horarios de atención
- Integración con sistema de rate limiting
- Soporte completo de dark mode

## Optimizaciones

### Performance
- Lazy loading de imágenes
- Código splitteado automáticamente por Vite
- Animaciones optimizadas con CSS
- Caché inteligente de datos

### Accesibilidad
- Navegación por teclado
- Labels semánticos
- ARIA labels en botones
- Contraste adecuado en dark/light mode

### SEO
- Meta tags apropiados
- Estructura semántica HTML5
- URLs amigables con anclas
- Open Graph tags

## Mantenimiento

### Actualizar Contenido
Los textos e imágenes se pueden actualizar directamente en los archivos de componentes en `src/components/`.

### Agregar Nuevas Secciones
1. Crear componente en `src/components/`
2. Importar en `App.tsx`
3. Agregar navegación en `Header.tsx`

### Modificar Estilos de Tema
Los colores del tema se configuran en `tailwind.config.js` y los estilos específicos de dark mode usan la clase `dark:` en los componentes.

## Contacto

**GYC Mantención SPA**
- Dirección: Baquedano 847, Santa Barbara, Biobío, Chile
- Teléfono: +56 9 9691 9657
- Email: contacto@gycmantencion.cl
- Denuncias: denuncias@gycmantencion.cl

## Licencia

© 2024 GYC Mantención SPA. Todos los derechos reservados.
