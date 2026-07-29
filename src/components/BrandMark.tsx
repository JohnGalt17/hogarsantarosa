import Image from "next/image";
import type { SiteData } from "@/types/site";

type BrandMarkProps = {
  data: SiteData;
  size?: "sm" | "lg";
};

const logoSizes = {
  sm: { box: "h-10 w-10", text: "text-base sm:text-lg" },
  lg: { box: "h-14 w-14 sm:h-16 sm:w-16", text: "text-2xl sm:text-3xl md:text-4xl" },
};

export function BrandMark({ data, size = "sm" }: BrandMarkProps) {
  const sizes = logoSizes[size];
  const logoAlt = `Logo ${data.brand.name}`;

  return (
    <div className="flex items-center gap-3">
      {data.brand.logo && (
        <Image
          src={data.brand.logo}
          alt={logoAlt}
          width={64}
          height={64}
          className={`${sizes.box} shrink-0 rounded-full border border-sage/20 bg-white object-cover shadow-sm`}
        />
      )}
      <span className={`brand-title leading-tight ${sizes.text}`}>
        {data.brand.name}
      </span>
    </div>
  );
}
