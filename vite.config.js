import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages = [
  "index.html",
  "about/index.html",
  "vision-mission/index.html",
  "dream-team/index.html",
  "leadership/index.html",
  "partners/index.html",
  "education/index.html",
  "lending/index.html",
  "business-consulting/index.html",
  "programs/index.html",
  "startsmart/index.html",
  "womens-biz/index.html",
  "find-your-path/index.html",
  "calendar/index.html",
  "blog/index.html",
  "resources/index.html",
  "donate/index.html",
  "volunteer/index.html",
  "schedule/index.html",
  "big-knight/index.html",
  "videos/index.html",
  "community-development/index.html",
];

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [
          page.replace(/\/index\.html$/, "").replace(/\.html$/, "") || "main",
          resolve(__dirname, page),
        ])
      ),
    },
  },
});
