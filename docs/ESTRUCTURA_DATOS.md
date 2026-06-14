# Estructura de datos — `content/site.json`

Referencia de todos los campos del sitio. El sitio lee este archivo en build; no hay base de datos.

---

## `site`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `language` | string | `es-AR` |
| `locale` | string | OpenGraph locale |
| `domain` | string | Dominio final (opcional) |
| `published` | boolean | Marcador interno |

---

## `seo`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | string | Título `<title>` y OG |
| `description` | string | Meta description |
| `keywords` | string[] | Keywords SEO |

---

## `brand`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | string | Nombre completo |
| `short_name` | string | Nombre corto |
| `tagline` | string | Propuesta de valor (hero) |
| `founded_year` | number | Año de fundación |
| `years_family_managed` | number | Años de trayectoria |
| `logo` | string | Ruta en `public/` |
| `favicon` | string | Ruta favicon |

---

## `theme`

Colores y estilo (referencia; Tailwind usa clases propias).

| Campo | Descripción |
|-------|-------------|
| `style` | `familiar` |
| `primary_color`, `accent_color` | Hex |
| `font_heading`, `font_body` | Referencia |

---

## `about`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `headline` | string | Título sección historia |
| `story` | string[] | Párrafos narrativos |
| `image` | string | Ruta imagen familia/fachada |
| `image_alt` | string | Alt text |
| `image_pending` | boolean? | Placeholder en UI |

---

## `values[]`

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `title` | Título valor |
| `description` | Texto corto |

---

## `philosophy`

| Campo | Descripción |
|-------|-------------|
| `headline` | Título (ej. culpa / calidad de vida) |
| `body` | Texto principal |
| `visits.policy` | `abierto` / `amplio` / `restringido` |
| `visits.description` | Texto horarios visita |
| `visits.restrictions_note` | string \| null |
| `resident_profile` | Perfil de residente ideal |

---

## `daily_life`

| Campo | Descripción |
|-------|-------------|
| `headline`, `intro` | Títulos |
| `items[]` | `time`, `title`, `description` |

---

## `services`

| Campo | Descripción |
|-------|-------------|
| `headline`, `intro` | Títulos |
| `categories[]` | Grupos de servicios |
| `categories[].id` | slug |
| `categories[].title` | Nombre grupo |
| `categories[].items[]` | Servicios individuales |
| `items[].id` | slug |
| `items[].title` | Nombre |
| `items[].description` | Detalle |
| `items[].note` | Nota al pie (null si no) |

---

## `rooms`

| Campo | Descripción |
|-------|-------------|
| `headline`, `intro` | Títulos |
| `types[]` | Tipos de habitación |
| `types[].features[]` | Lista amenities |
| `types[].images[]` | Rutas fotos |
| `types[].availability_note` | Disponibilidad |
| `types[].price_display` | `consultar` o texto |
| `types[].image_pending` | boolean? |

---

## `team`

| Campo | Descripción |
|-------|-------------|
| `headline`, `intro` | Títulos |
| `members[]` | `name`, `role`, `bio`, `image`, `image_pending?` |

---

## `media`

| Campo | Descripción |
|-------|-------------|
| `gallery[]` | `src`, `alt`, `category`, `pending?` |
| `videos[]` | `title`, `url`, `thumbnail` |

---

## `location`

| Campo | Descripción |
|-------|-------------|
| `address` | street, neighborhood, city, province, country, postal_code |
| `coordinates` | lat, lng (null si no definido) |
| `directions` | Cómo llegar |
| `map_url` | Link Google Maps |
| `map_image` | Imagen estática del mapa |
| `context` | Texto zona/barrio |

---

## `contact`

| Campo | Descripción |
|-------|-------------|
| `phone_display` | Formato humano |
| `phone_raw` | Para `tel:` |
| `whatsapp.number` | Sin +, formato wa.me (549...) |
| `whatsapp.display` | Formato humano |
| `whatsapp.available_hours` | Horario respuesta |
| `whatsapp.default_message` | Mensaje por defecto |
| `email`, `email_jobs` | Emails |
| `social.facebook`, `social.instagram` | URLs |
| `financing_note` | Texto modalidad particular / sin factura |

---

## `payment` (raíz del JSON)

| Campo | Descripción |
|-------|-------------|
| `pami` | false — no convenio PAMI |
| `obra_social` | false — no obras sociales |
| `particular` | true — solo particular |
| `issues_invoices` | false — no emiten facturas |
| `internal_note` | Nota para el equipo (no se muestra en web) |
| `public_summary` | Resumen público opcional |

---

## `whatsapp`

### `floating_button`

| Campo | Descripción |
|-------|-------------|
| `enabled` | Mostrar botón flotante |
| `text` | Texto botón |
| `position` | `bottom-right` |

### `templates[]`

Plantillas de mensaje para wa.me.

| Campo | Descripción |
|-------|-------------|
| `id` | slug (usado en CTAs) |
| `label` | Texto en selector |
| `description` | Subtítulo |
| `message` | Texto con variables `{nombre_visitante}`, etc. |

### `form_fields[]`

| Campo | Descripción |
|-------|-------------|
| `key` | Variable en plantilla |
| `label` | Label formulario |
| `type` | text, tel, textarea, number, select |
| `required` | boolean |
| `placeholder` | opcional |
| `show_for_templates` | ids de plantillas donde aparece |
| `options` | para select |

### `variable_defaults`

Valores por defecto para variables en plantillas (ej. `nombre_hogar`).

---

## `cta`

| Campo | Descripción |
|-------|-------------|
| `hero.primary` | Texto botón principal hero |
| `hero.secondary` | Texto botón secundario |
| `hero.whatsapp_template_id` | id plantilla |
| `sections` | Textos strips intermedios |
| `footer` | Texto sección contacto |

---

## `faq[]`

| Campo | Descripción |
|-------|-------------|
| `id` | slug |
| `question` | Pregunta |
| `answer` | Respuesta |

---

## `testimonials[]`

| Campo | Descripción |
|-------|-------------|
| `author` | Nombre o "Familia de..." |
| `text` | Testimonio |
| `year` | number \| null |
| `pending` | boolean? — no mostrar hasta validar |
| `note` | Nota interna |

---

## `footer`

| Campo | Descripción |
|-------|-------------|
| `legal_name` | Razón social |
| `copyright_from` | Año inicio copyright |
| `extra_links[]` | `{ label, url }` |

---

## `digital_status` (solo documentación interna)

No usado por el sitio. Registra diagnóstico reputación y homónimos.

---

## Variables de plantilla WhatsApp

| Variable | Uso |
|----------|-----|
| `{nombre_hogar}` | Default en variable_defaults |
| `{nombre_visitante}` | Quien consulta |
| `{telefono_visitante}` | Tel contacto |
| `{nombre_familiar}` | Residente potencial |
| `{edad_familiar}` | Edad |
| `{situacion}` | Descripción situación |
| `{fecha_visita_preferida}` | Visita |
| `{mensaje_libre}` | Texto libre |
| `{area_interes}` | Trabajo |

Si una variable no tiene valor, se elimina del mensaje final.

---

## Agregar una nueva plantilla WhatsApp

1. Añadir objeto en `whatsapp.templates`
2. Si necesita campos nuevos, añadir en `whatsapp.form_fields` con `show_for_templates`
3. Opcional: referenciar `id` en `cta.hero.whatsapp_template_id` o usar en componentes

---

## Agregar una foto

1. Guardar en `public/images/nombre.jpg`
2. Actualizar ruta en JSON (`about.image`, `media.gallery`, etc.)
3. Quitar `image_pending` o `pending` si existía
