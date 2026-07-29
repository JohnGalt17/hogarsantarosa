import type { SiteData } from "@/types/site";

export function getInstagramUrl(data: SiteData): string | null {
  const url = data.contact.instagram?.url || data.contact.social.instagram;
  return url.trim() ? url.trim() : null;
}
