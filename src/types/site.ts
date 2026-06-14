export interface SiteData {
  site: { language: string; locale: string; domain: string; published: boolean };
  seo: { title: string; description: string; keywords: string[] };
  brand: {
    name: string;
    short_name: string;
    tagline: string;
    founded_year: number;
    years_family_managed: number;
    hero_image?: string;
    hero_image_alt?: string;
    logo: string;
    favicon: string;
  };
  theme: {
    style: string;
    primary_color: string;
    accent_color: string;
    font_heading: string;
    font_body: string;
  };
  about: {
    headline: string;
    story: string[];
    image: string;
    image_alt: string;
    image_pending?: boolean;
  };
  highlights: string[];
  values: Array<{ id: string; title: string; description: string }>;
  philosophy: {
    headline: string;
    body: string;
    visits: { policy: string; description: string; restrictions_note: string | null };
    resident_profile: string;
  };
  daily_life: {
    headline: string;
    intro: string;
    items: Array<{ time: string; title: string; description: string }>;
  };
  services: {
    headline: string;
    intro: string;
    categories: Array<{
      id: string;
      title: string;
      items: Array<{
        id: string;
        title: string;
        description: string;
        note: string | null;
      }>;
    }>;
  };
  rooms: {
    headline: string;
    intro: string;
    types: Array<{
      id: string;
      title: string;
      description: string;
      features: string[];
      images: string[];
      availability_note: string;
      price_display: string;
      image_pending?: boolean;
    }>;
  };
  team: {
    headline: string;
    intro: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      image_pending?: boolean;
    }>;
  };
  media: {
    gallery: Array<{
      src: string;
      alt: string;
      category: string;
      pending?: boolean;
    }>;
    videos: Array<{ title: string; url: string; thumbnail: string }>;
  };
  location: {
    headline: string;
    address: {
      street: string;
      neighborhood: string;
      city: string;
      province: string;
      country: string;
      postal_code: string;
    };
    coordinates: { lat: number | null; lng: number | null };
    directions: string;
    map_url: string;
    map_image: string;
    context: string;
  };
  contact: {
    phone_display: string;
    phone_raw: string;
    whatsapp: {
      number: string;
      display: string;
      available_hours: string;
      default_message: string;
    };
    email: string;
    email_jobs: string;
    social: { facebook: string; instagram: string };
    financing_note: string;
  };
  payment?: {
    pami: boolean;
    obra_social: boolean;
    particular: boolean;
    issues_invoices: boolean;
    internal_note?: string;
    public_summary?: string;
  };
  whatsapp: {
    floating_button: { enabled: boolean; text: string; position: string };
    templates: Array<{
      id: string;
      label: string;
      description: string;
      message: string;
    }>;
    form_fields: Array<{
      key: string;
      label: string;
      type: string;
      required: boolean;
      placeholder?: string;
      show_for_templates?: string[];
      options?: string[];
    }>;
    variable_defaults: Record<string, string>;
  };
  cta: {
    hero: {
      primary: string;
      secondary: string;
      whatsapp_template_id: string;
    };
    sections: Record<string, string>;
    footer: string;
  };
  faq: Array<{ id: string; question: string; answer: string }>;
  testimonials: Array<{
    author: string;
    text: string;
    year: number | null;
    pending?: boolean;
    note?: string;
  }>;
  footer: {
    legal_name: string;
    copyright_from: number;
    extra_links: Array<{ label: string; url: string }>;
  };
}
