import siteJson from "../../content/site.json";
import type { SiteData } from "@/types/site";

export const siteData = siteJson as SiteData;

export function getFullAddress(data: SiteData): string {
  const a = data.location.address;
  return `${a.street}, ${a.neighborhood}, ${a.city}, ${a.province}`;
}
