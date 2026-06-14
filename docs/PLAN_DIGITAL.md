# Plan de acción — Perfil digital Hogar Santa Rosa

Documento para el cliente y el equipo de implementación. Basado en `info_base.txt` y diagnóstico actual.

---

## Situación actual (diagnóstico)

| Área | Estado | Impacto |
|------|--------|---------|
| **Google Maps** | ~5.2/5 con 18 reseñas, reputación mixta | La mayoría de familias buscan "geriátrico Merlo" o "hogar ancianos Libertad" y eligen por Maps |
| **Sitio web propio** | No existía (este proyecto) | Sin canal propio de confianza y WhatsApp directo |
| **Instagram / redes** | Homónimos en Chile, Tigre, Santiago del Estero | Confusión de marca; el hogar real de Libertad no se diferencia |
| **Listados agregadores** | Aparece en geriatricobelgrano.com.ar con análisis negativo | Terceros narran la reputación sin control del dueño |
| **Fotos reales** | Pendientes | Sin fotos auténticas, la web no derriba el miedo al "asilo frío" |

**Prioridad estratégica:** no solo "tener web", sino **reconstruir confianza local** con Google Maps + web transparente + testimonios verificables + fotos reales.

---

## Fase 1 — Fundamentos (0–30 días)

### 1.1 Google Business Profile (Maps) — PRIORIDAD #1

El 90% del tráfico en esta zona viene de búsquedas locales.

**Acciones:**

1. **Verificar** la ficha de Google Maps del negocio (Itaqui 1252).
2. **Completar perfil al 100%:**
   - Nombre exacto: Hogar Santa Rosa
   - Categoría: Residencia de ancianos / Hogar de ancianos
   - Dirección, teléfono, WhatsApp, sitio web (cuando esté publicado)
   - Horarios de visita y de atención telefónica
   - Descripción con historia familiar + 40 años + Libertad/Merlo
3. **Fotos en Maps (mínimo 15):**
   - Fachada, entrada, patio, habitaciones, comedor, personal (con permiso), actividades
   - Actualizar cada trimestre
4. **Link directo WhatsApp** en la ficha (si Google lo permite en la región) o en descripción
5. **Responder todas las reseñas** (positivas y negativas) con tono profesional y humano

**Reseñas nuevas (crítico):**

- Pedir a **familias actuales** (con tacto) una reseña de 5 estrellas en Google
- Objetivo 6 meses: **30+ reseñas recientes positivas** (no solo antiguas negativas)
- Nunca comprar reseñas falsas

### 1.2 Publicar este sitio web

1. Dominio sugerido: `hogarsantarosa.com.ar` o `hogarsantarosa-libertad.com.ar` (diferencia del homónimo)
2. Hosting estático (Vercel gratis, o hosting local barato)
3. SSL activo (HTTPS)
4. Enlazar desde Google Maps, WhatsApp status, folletos

### 1.3 Completar `content/site.json` y fotos

Ver [CONTENIDO_PENDIENTE.md](CONTENIDO_PENDIENTE.md).

### 1.4 WhatsApp Business

1. Confirmar número: **0220 49-43155** / internacional **+54 9 220 494-3155**
2. Perfil WhatsApp Business:
   - Foto del hogar (patio o fachada)
   - Descripción: "Hogar familiar en Libertad, Merlo. +40 años. Consultas por plazas."
   - Catálogo opcional: "Servicios" con 3–4 ítems
   - Mensaje de bienvenida automático
   - Horario de respuesta

---

## Fase 2 — Contenido y reputación (30–90 días)

### 2.1 Prueba social real

| Acción | Detalle |
|--------|---------|
| **3–4 testimonios** | Familias de vecinos o ex-residentes, con permiso escrito |
| **Video corto** | 60–90 seg: dueños hablando, patio, actividad real (celular alcanza) |
| **Antes/después de comunicación** | FAQ en web sobre cómo familias mantienen contacto (derriba objeción de aislamiento) |

Reemplazar en JSON: `testimonials[]` con textos reales.

### 2.2 Instagram / Facebook propio (Libertad)

**Problema:** cuentas homónimas en otros países/ciudades.

**Solución:**

- Crear **@hogarsantarosa.libertad** o **@hogarsantarosa.merlo** (nombre único)
- Bio: "Hogar familiar · Itaqui 1252, Libertad, Merlo · +40 años"
- Link a web y WhatsApp
- 2 publicaciones por semana: foto del día, cumpleaños, visita familiar (con permiso)
- **No** usar stock de abuelos genéricos

Facebook suele convertir mejor que Instagram en hijos de 40–50 años en zona oeste.

### 2.3 Transparencia en la web (derribar objeciones)

Asegurar que el sitio responda explícitamente:

- Horarios de visita
- Qué pasa en una urgencia (protocolo resumido)
- **Modalidad particular** — sin PAMI, sin obras sociales, sin facturas (transparencia desde el inicio)
- Cómo es la comunicación con el familiar

Todo editable en `faq` y `philosophy` del JSON.

---

## Fase 3 — Promoción local (90+ días)

### 3.1 Alianzas offline (alto ROI en esta zona)

| Canal | Acción |
|-------|--------|
| **Médicos y clínicas de la zona** | Folleto simple + QR a web/WhatsApp. Muchas familias preguntan al médico tras un alta; aclarar en el folleto que es **particular, sin PAMI**. |
| **Farmacias del barrio** | Folletos en mostrador (muchas familias retiran medicación crónica) |
| **Centros de jubilados** | Charla informal o folletería |
| **Hospitales / altas médicas** | Contacto con trabajadores sociales de zona |

Material folleto: foto real, QR WhatsApp, "40 años en Libertad", sin precio fijo sino "consultá facilidades".

### 3.2 Publicidad geolocalizada (Facebook / Meta)

- Radio **5–10 km** desde Itaqui 1252
- Audiencia: 35–60 años, Merlo, Libertad, Pontevedra, San Antonio de Padua, etc.
- Mensajes (ejemplos):
  - "¿Te preocupa dejar a tu papá solo mientras trabajás? En nuestro hogar familiar en Libertad nos ocupamos de todo."
  - "Más de 40 años cuidando abuelos del barrio. Consultá plazas por WhatsApp."
- Presupuesto inicial: ARS modesto (probar 2 creativos × 2 semanas)
- **Landing:** este sitio web, no solo WhatsApp (da más confianza)

### 3.3 SEO local básico

- Título y meta en `seo` del JSON
- Google Maps enlazando al dominio
- Nombre + dirección + teléfono consistentes en **todos** los lugares (NAP)

---

## Métricas a seguir

| Métrica | Herramienta | Meta 6 meses |
|---------|-------------|--------------|
| Reseñas Google | Google Business | 30+ reseñas, media > 4.0 |
| Clics WhatsApp | Bitly en link o WhatsApp Business stats | Tendencia al alza |
| Visitas web | Analytics (Vercel/Plausible) | Establecer baseline |
| Consultas → visitas | Registro manual del cliente | % conversión |
| Plazas ocupadas | Cliente | Objetivo de negocio |

---

## Cronograma resumido

```
Semana 1–2:  Verificar Maps · Confirmar WhatsApp · Completar JSON · Sacar 15 fotos
Semana 3–4:  Publicar web · Dominio · Pedir 5 reseñas a familias actuales
Mes 2:       Instagram/Facebook · Video corto · Folletos con QR
Mes 3+:      Campañas Meta locales · Alianzas médicos/farmacias · Medir y ajustar
```

---

## Riesgos y cómo mitigarlos

| Riesgo | Mitigación |
|--------|------------|
| Reseñas negativas antiguas dominan | Muchas reseñas nuevas + respuestas profesionales + web transparente |
| Confusión con otros "Santa Rosa" | Dominio y redes con "Libertad/Merlo" en el nombre |
| Fotos stock | Solo fotos reales del hogar |
| Promesas que no se cumplen en web | Validar cada servicio en JSON con el dueño |
| Expectativas de precio en anuncios | "Consultá facilidades" sin precio falso |

---

## Responsables sugeridos

| Tarea | Quién |
|-------|-------|
| Fotos, testimonios, datos reales | Cliente / familia dueña |
| JSON, web, dominio | Desarrollo |
| Google Maps, reseñas, WhatsApp | Cliente (dueño) con guía |
| Folletos, alianzas | Cliente |
| Anuncios Meta | Cliente o agencia con presupuesto |

---

## Próximo paso inmediato

1. Reunión 30 min con el dueño: validar servicios, visitas, WhatsApp correcto, facilidades de pago (sin factura)
2. Sesión fotográfica 1 hora en el hogar
3. Publicar web en dominio + enlazar Maps
4. Pedir 3 reseñas esta semana a familias que estén contentas
