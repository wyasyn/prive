import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yasin Walum",
    short_name: "Walum",
    description: "Portfolio of Yasin Walum",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#1091b2",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
