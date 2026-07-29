type SectionIconProps = {
  id: string;
  className?: string;
};

export function SectionIcon({ id, className = "h-6 w-6" }: SectionIconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "dignidad":
      return (
        <svg {...props}>
          <path d="M12 21s-6.5-4.5-8.5-8.5a5 5 0 0 1 8.4-3.6A5 5 0 0 1 20.5 12.5C18.5 16.5 12 21 12 21z" />
        </svg>
      );
    case "atencion":
      return (
        <svg {...props}>
          <path d="M12 3v3M8 6h8M6 10h12v10H6z" />
          <path d="M9 14h6M9 17h4" />
        </svg>
      );
    case "ambiente":
      return (
        <svg {...props}>
          <path d="M4 11 12 4l8 7v8H4z" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "cuidados_medicos":
      return (
        <svg {...props}>
          <path d="M6 4h8l2 2v14H6z" />
          <path d="M10 10v6M7 13h6" />
        </svg>
      );
    case "residentes":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4 19c.8-2.5 2.8-4 5-4s4.2 1.5 5 4M13 19c.5-1.8 1.8-3 3.5-3 1.2 0 2.2.5 3 1.5" />
        </svg>
      );
    case "otros_servicios":
      return (
        <svg {...props}>
          <circle cx="7" cy="7" r="2" />
          <path d="M9 9 19 19M14 6l4 4M6 14l4 4" />
        </svg>
      );
    case "highlights":
      return (
        <svg {...props}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
