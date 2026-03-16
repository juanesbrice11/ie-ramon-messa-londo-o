# Carpeta: Capturas de pantalla de proyectos estudiantiles

Coloca aquí las capturas de pantalla (previews) de las páginas web de los estudiantes.

## Convención de nombres

Usa el nombre del estudiante en minúsculas, sin tildes, con guiones:

| Archivo (sugerido)               | Descripción                              |
|----------------------------------|------------------------------------------|
| `valeria-gomez.png`              | Preview del proyecto de Valeria Gómez    |
| `santiago-rios.png`              | Preview del proyecto de Santiago Ríos    |
| `daniela-castillo.png`           | Preview del proyecto de Daniela Castillo |
| *(un archivo por estudiante)*    |                                          |

## Formato recomendado
- Resolución: 1200×800 px (relación 3:2 o 16:9)
- Formato: PNG o WebP
- Captura el viewport completo o el encabezado de la página

## Dónde se usan
- `components/StudentProjects.tsx` — tarjeta de cada proyecto
- `lib/data.ts` — campo `previewImage` de cada objeto en `studentProjects[]`

## Cómo conectarlos al código
En `lib/data.ts`, actualiza el campo `previewImage` de cada proyecto:
```ts
previewImage: "/images/proyectos/valeria-gomez.png",
```
