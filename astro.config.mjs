import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  base: process.env.BASE_PATH || "/",
  integrations: [tailwind({ applyBaseStyles: false })],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    }
  }
});
