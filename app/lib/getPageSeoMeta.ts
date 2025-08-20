// seo.ts
export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  url?: string;
}

export function getSeoMeta({
  title = "Cash Flow",
  description = "Cash Flow - Digital Wallet Management Application",
  keywords = "cash flow, wallet, finance, money management",
  author = "Cash Flow Team",
  ogImage = "/default-og.png",
  url = "https://cashflow.com",
}: SeoConfig) {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: author },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}
