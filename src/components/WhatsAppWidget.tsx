"use client";

import { useState } from "react";
import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function WhatsAppWidget({ data }: { data: SiteData }) {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(
    data.whatsapp.templates[0]?.id ?? ""
  );
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  if (!data.whatsapp.floating_button.enabled) return null;

  const visibleFields = data.whatsapp.form_fields.filter((field) => {
    if (!field.show_for_templates) return true;
    return field.show_for_templates.includes(selectedTemplate);
  });

  const whatsappHref = buildWhatsAppFromTemplate(data, selectedTemplate, formValues);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1ebe57] sm:text-base"
        aria-label={data.whatsapp.floating_button.text}
      >
        <span aria-hidden="true">💬</span>
        {data.whatsapp.floating_button.text}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-dialog-title"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 id="whatsapp-dialog-title" className="text-xl font-bold text-sage-dark">
                  Consulta por WhatsApp
                </h2>
                <p className="text-sm text-gray-500">
                  Complete los datos y abrimos WhatsApp con el mensaje listo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tipo de consulta
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {data.whatsapp.templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>

            <div className="space-y-3">
              {visibleFields.map((field) => (
                <div key={field.key}>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500"> *</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={formValues[field.key] ?? ""}
                      onChange={(e) =>
                        setFormValues((v) => ({ ...v, [field.key]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  ) : field.type === "select" ? (
                    <select
                      value={formValues[field.key] ?? ""}
                      onChange={(e) =>
                        setFormValues((v) => ({ ...v, [field.key]: e.target.value }))
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    >
                      <option value="">Seleccionar...</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formValues[field.key] ?? ""}
                      onChange={(e) =>
                        setFormValues((v) => ({ ...v, [field.key]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  )}
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
