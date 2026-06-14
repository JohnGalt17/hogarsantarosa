# Contenido pendiente — Hogar Santa Rosa

Checklist para el cliente. Marcar cuando esté listo y actualizar `content/site.json` + `public/images/`.

---

## Crítico (antes de publicar)

- [ ] **Confirmar WhatsApp** — ¿0220 49-43155 es el número correcto con WhatsApp activo?
- [ ] **Validar horarios de visita** exactos (ahora: 10–17 hs aprox.)
- [ ] **Validar lista de servicios** — marcar qué sí ofrecen y qué no
- [x] **PAMI / obras sociales** — No. Solo modalidad particular.
- [x] **Facturas** — No emiten facturas (modalidad particular para mantener costos accesibles).
- [ ] **Protocolo urgencias** — texto breve para FAQ (qué pasa si hay emergencia)
- [ ] **Facilidades de pago** — texto real si ofrecen cuotas o acuerdos (sin factura) → `contact.financing_note`

---

## Fotos (mínimo 15 para web + Maps)

Sin stock. Abuelos y espacio reales.

| # | Tema | Archivo sugerido | JSON |
|---|------|------------------|------|
| 1 | Fachada / entrada | `fachada.jpg` | `about.image` o galería |
| 2 | Patio | `patio.jpg` | `media.gallery` |
| 3 | Comedor / desayuno | `comedor.jpg` | galería |
| 4 | Habitación individual | `habitacion-individual.jpg` | `rooms.types[0]` |
| 5 | Habitación compartida | `habitacion-compartida.jpg` | `rooms.types[1]` |
| 6 | Actividad (cartas, mate, gimnasia) | `actividad.jpg` | galería |
| 7 | Familia dueña (rostros) | `familia.jpg` | `about.image`, `team` |
| 8 | Personal cuidando | `cuidado.jpg` | galería |
| 9 | Baño / accesibilidad | `acceso.jpg` | galería |
| 10+ | Más ángulos para Google Maps | varias | Maps + galería |

**Permisos:** consentimiento de residentes y familias para fotos con personas.

---

## Textos a personalizar

- [ ] **Historia** — nombres, año exacto de inicio, anécdotas del barrio
- [ ] **Testimonios** (3–4) — con permiso escrito, reemplazar `testimonials[]`
- [ ] **Email** — si quieren `contact.email` y `email_jobs`
- [ ] **Razón social** — `footer.legal_name`

---

## Redes y dominio

- [ ] Dominio elegido (ej. `hogarsantarosa-libertad.com.ar`)
- [ ] Instagram nuevo con Merlo/Libertad en el nombre
- [ ] Facebook página del negocio
- [ ] Verificar Google Business Profile

---

## Opcional (mejora conversión)

- [ ] Video 60–90 seg (celular) → `media.videos`
- [ ] Logo simple → `brand.logo`
- [ ] Coordenadas exactas → `location.coordinates` (desde Maps)

---

## Cómo entregar al desarrollo

1. Fotos en carpeta o WhatsApp (nombres claros)
2. Textos en Word o mensaje
3. Correcciones directamente en `content/site.json` si prefieren

Cuando todo lo crítico esté marcado, el sitio puede publicarse sin placeholders.
