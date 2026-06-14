import type { SiteData } from "@/types/site";

export function buildWhatsAppUrl(
  number: string,
  message: string
): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export function fillTemplate(
  template: string,
  values: Record<string, string>,
  defaults: Record<string, string>
): string {
  let result = template;
  const merged = { ...defaults, ...values };

  for (const [key, value] of Object.entries(merged)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), value || "");
  }

  return result.replace(/\{[^}]+\}/g, "").replace(/\s+/g, " ").trim();
}

export function getTemplateById(data: SiteData, id: string) {
  return data.whatsapp.templates.find((t) => t.id === id);
}

export function buildWhatsAppFromTemplate(
  data: SiteData,
  templateId: string,
  formValues: Record<string, string> = {}
): string {
  const template = getTemplateById(data, templateId);
  if (!template) {
    return buildWhatsAppUrl(
      data.contact.whatsapp.number,
      data.contact.whatsapp.default_message
    );
  }

  const message = fillTemplate(
    template.message,
    formValues,
    data.whatsapp.variable_defaults
  );

  return buildWhatsAppUrl(data.contact.whatsapp.number, message);
}
