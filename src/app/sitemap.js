export default function sitemap() {
  const baseUrl = "https://brandryo.com";
  const now = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/lead-generation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/customer-acquisition`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/revenue-growth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/consultancy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // ── Keyword-Targeted Business Owner Search Pages ──────────────────────────
    {
      url: `${baseUrl}/get-more-leads`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/get-more-customers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/grow-sales-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/google-ads-management`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/social-media-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/email-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/small-business-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${baseUrl}/marketing-for-startups`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    // ── Insights Hub & Articles ───────────────────────────────────────────────
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights/what-is-a-digital-marketing-consultant`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/insights/how-to-generate-leads-for-small-business`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/insights/how-to-increase-roas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
