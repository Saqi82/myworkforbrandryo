export default function robots() {
  return {
    rules: [
      /* ── Standard search engine crawlers ───────────────────────────────── */
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/account/"],
        crawlDelay: 0,
      },

      /* ── AI Crawlers — explicitly allowed for GEO ──────────────────────── */
      // ChatGPT / OpenAI
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/", "/account/"] },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/account/"],
      },
      { userAgent: "ChatGPT-User", allow: "/" },

      // Anthropic Claude
      { userAgent: "Claude-Web", allow: "/", disallow: ["/api/", "/account/"] },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/account/"],
      },
      { userAgent: "ClaudeBot", allow: "/" },

      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/account/"],
      },

      // Google AI (Gemini / SGE)
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },

      // Bing / Microsoft Copilot
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "msnbot", allow: "/" },

      // Common Crawl (used for AI training datasets)
      { userAgent: "CCBot", allow: "/", disallow: ["/api/", "/account/"] },

      // Cohere AI
      { userAgent: "cohere-ai", allow: "/", disallow: ["/api/", "/account/"] },

      // Meta AI
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },

      // Apple
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },

      // DuckDuckGo / DuckDuckBot
      { userAgent: "DuckDuckBot", allow: "/" },

      // Brave Search
      { userAgent: "Brave Search", allow: "/" },

      // Diffbot
      { userAgent: "Diffbot", allow: "/" },

      // YouBot (You.com AI search)
      { userAgent: "YouBot", allow: "/" },

      /* ── Disallow bad bots ──────────────────────────────────────────────── */
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: "https://brandryo.com/sitemap.xml",
    host: "https://brandryo.com",
  };
}
