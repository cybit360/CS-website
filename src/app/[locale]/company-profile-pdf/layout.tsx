import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CybitSolutions Company Profile",
  description:
    "Printable company profile for CybitSolutions — the Technology and Digital Transformation Division of AFANO Group, delivering mission-critical solutions.",
};

export default function CompanyProfilePDFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
