import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement | CybitSolutions",
  description:
    "CybitSolutions Corporate Capability Statement - Print-optimized for federal procurement.",
};

export default function CapabilityPDFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
