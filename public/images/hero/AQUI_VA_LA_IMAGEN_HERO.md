# Carpeta: Imagen principal del Hero

Coloca aquí la imagen de fondo o ilustración del hero de la página.

## Archivos esperados

| Archivo (sugerido)    | Descripción                                         |
|-----------------------|-----------------------------------------------------|
| `hero-bg.jpg`         | Fotografía de fondo del hero (opcional)             |
| `hero-illustration.svg` | Ilustración decorativa (opcional)                |

## Formato recomendado
- Resolución: mínimo 1920×1080 px
- Formato: JPG (fotografías) o SVG/WebP (ilustraciones)
- La imagen debe funcionar bien con texto blanco encima

## Dónde se usa
- `components/Hero.tsx` — sección principal de la página

## Nota
El hero actualmente usa un gradiente CSS como fondo, por lo que esta imagen es opcional.
Si deseas usar una fotografía real, edita `Hero.tsx` para agregar el `<Image>` component de Next.js.
