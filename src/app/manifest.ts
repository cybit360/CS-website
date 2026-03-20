import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CybitSolutions",
    short_name: "CybitSolutions",
    description:
      "Mission-Grade IT for Government & Enterprise. Secure, scalable solutions for federal agencies and enterprise organizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F7FA",
    theme_color: "#0B1C2E",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
