import { site } from "@/data/site";

export default function sitemap() {
  return [
    {
      url: site.meta.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
