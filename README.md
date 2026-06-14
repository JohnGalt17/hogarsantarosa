# Hogar Santa Rosa — Sitio web

Sitio estático para **Hogar Santa Rosa**, hogar familiar en Libertad (Merlo). Todo el contenido editable vive en un solo archivo JSON.

## Inicio rápido

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build para publicar

```bash
npm run build
```

El sitio exportado queda en `out/`. Se puede subir a cualquier hosting estático (Vercel, Netlify, cPanel, etc.).

## Editar contenido

**Archivo principal:** `content/site.json`

| Qué cambiar | Dónde en JSON |
|-------------|---------------|
| Textos, historia, servicios | Secciones `about`, `services`, `faq`, etc. |
| Teléfono y WhatsApp | `contact`, `whatsapp` |
| Ubicación y mapa | `location` |
| Fotos | Rutas en `about.image`, `media.gallery`, `rooms`, `team` → archivos en `public/images/` |
| Plantillas WhatsApp | `whatsapp.templates` y `whatsapp.form_fields` |

No hace falta tocar código para refinar textos o datos: solo JSON e imágenes.

## Documentación

| Archivo | Contenido |
|---------|-----------|
| [docs/PLAN_DIGITAL.md](docs/PLAN_DIGITAL.md) | Plan de acción: reputación, Google Maps, promoción |
| [docs/ESTRUCTURA_DATOS.md](docs/ESTRUCTURA_DATOS.md) | Referencia completa del JSON |
| [docs/CONTENIDO_PENDIENTE.md](docs/CONTENIDO_PENDIENTE.md) | Checklist de lo que el cliente debe entregar |

## Estructura del proyecto

```
content/site.json     ← datos del sitio
public/images/        ← fotos y mapa
src/components/       ← secciones de la página
src/lib/whatsapp.ts   ← generación de links wa.me
```

## WhatsApp

El número configurado es `549224943155` (0220 49-43155). Verificar con el cliente que sea el WhatsApp correcto antes de publicar.

## Estado actual

- Boceto funcional con placeholders de imagen (marcados en JSON con `image_pending` / `pending`)
- Mapa de ubicación incluido (`public/images/mapa.jpg`)
- Botón flotante + modal con plantillas de consulta
