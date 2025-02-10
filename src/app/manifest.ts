import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gunjo",
    short_name: "Gunjo",
    description: "Bluesky client for the web",
    start_url: "/login",
    display: "standalone",
    background_color: "#fff",
    icons: [
      {
        src: "favicon.ico",
        sizes: "any",
      },
    ],
  };
}
