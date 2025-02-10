import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "Gunjo",
    "short_name": "Gunjo",
    "description": "Bluesky client for the web",
    "start_url": "/home",
    "display": "standalone",
    "background_color": "#fff",
    "icons": [
      {
        "src": "mark.svg",
        "sizes": "any",
      },
    ],
  };
}
