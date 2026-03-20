import { cn } from "@/lib/utils";

export const partnerLogoMap: Record<string, { color: string; abbrev: string }> = {
  "AWS": { color: "#FF9900", abbrev: "AWS" },
  "Amazon Web Services (AWS)": { color: "#FF9900", abbrev: "AWS" },
  "Microsoft": { color: "#00A4EF", abbrev: "M" },
  "Google Cloud": { color: "#4285F4", abbrev: "G" },
  "ServiceNow": { color: "#81B5A1", abbrev: "SN" },
  "Splunk": { color: "#65A637", abbrev: ">" },
  "Cisco": { color: "#049FD9", abbrev: "C" },
  "IBM": { color: "#0F62FE", abbrev: "IBM" },
  "HashiCorp": { color: "#000000", abbrev: "H" },
  "CrowdStrike": { color: "#FF0000", abbrev: "CS" },
  "Databricks": { color: "#FF3621", abbrev: "DB" },
};

const sizeMap = {
  sm: { badge: "h-7 w-7", text: "text-[10px]", name: "text-xs" },
  md: { badge: "h-9 w-9", text: "text-xs", name: "text-sm" },
  lg: { badge: "h-12 w-12", text: "text-sm", name: "text-base" },
};

export function PartnerLogo({
  name,
  showName = true,
  size = "sm",
  className,
}: {
  name: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const config = partnerLogoMap[name];
  const s = sizeMap[size];

  if (!config) {
    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        {showName && <span className={cn("font-semibold text-navy", s.name)}>{name}</span>}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 40 40"
        className={cn("shrink-0 rounded-lg", s.badge)}
        role="img"
        aria-label={`${name} logo`}
      >
        <rect width="40" height="40" rx="8" fill={config.color} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill="white"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize={config.abbrev.length > 2 ? "11" : config.abbrev.length > 1 ? "13" : "18"}
        >
          {config.abbrev}
        </text>
      </svg>
      {showName && (
        <span className={cn("font-semibold text-navy", s.name)}>{name}</span>
      )}
    </span>
  );
}
