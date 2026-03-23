import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CybitSolutions Company Profile",
  description:
    "Printable company profile for CybitSolutions — Veteran-Owned, Minority-Owned IT firm delivering mission-critical solutions.",
};

export default function CompanyProfilePDFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
