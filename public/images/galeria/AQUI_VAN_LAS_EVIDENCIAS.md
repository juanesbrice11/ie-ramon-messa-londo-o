# Carpeta: Galería / Evidencias fotográficas

Coloca aquí las fotografías reales del proceso educativo.

## Tipo de imágenes recomendadas

| Archivo (sugerido)          | Descripción                                      |
|-----------------------------|--------------------------------------------------|
| `clase-01.jpg`              | Estudiantes en clase de programación             |
| `sala-sistemas-01.jpg`      | Sala de sistemas del colegio                     |
| `estudiantes-trabajando.jpg`| Estudiantes trabajando en sus computadores       |
| `taller-scratch.jpg`        | Taller de Scratch con grados 6° y 7°            |
| `presentacion-proyectos.jpg`| Presentación final de proyectos                  |
| `clase-html-css.jpg`        | Clase de HTML y CSS                              |

## Formato recomendado
- Resolución: mínimo 800×600 px
- Formato: JPG o WebP
- Relación de aspecto: 4:3 o 16:9

## Dónde se usan
- `components/Gallery.tsx` — galería de 6 imágenes en grid responsive
- `lib/data.ts` — array `galleryImages[]`, actualiza los `src` con la ruta real

## Cómo conectarlos al código
En `lib/data.ts`, cambia cada `src` por la ruta real, por ejemplo:
```ts
src: "/images/galeria/clase-01.jpg",
```
