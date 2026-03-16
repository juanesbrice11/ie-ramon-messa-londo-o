# Carpeta: Logos institucionales

Coloca aquí los archivos de logo de cada institución.

## Archivos esperados

| Archivo               | Descripción                                 | Formato recomendado |
|-----------------------|---------------------------------------------|---------------------|
| `logo-ie-ramon.png`   | Logo oficial de la IE Ramon Messa           | PNG con fondo transparente |
| `logo-uam.png`        | Logo oficial de la Universidad Autónoma de Manizales | PNG con fondo transparente |

## Dónde se usan
- `components/Navbar.tsx` — logo pequeño en la barra de navegación
- `components/Partners.tsx` — logos grandes en la sección de instituciones aliadas
- `components/Footer.tsx` — logo pequeño en el pie de página

## Cómo conectarlos al código
Una vez que coloques los archivos, el componente `Partners.tsx` usará:
```tsx
<Image src="/images/logos/logo-ie-ramon.png" alt="IE Ramon Messa" width={112} height={112} />
<Image src="/images/logos/logo-uam.png" alt="Universidad Autónoma de Manizales" width={112} height={112} />
```
