import { vercelPreset } from "@vercel/react-router/vite";

import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  presets: [vercelPreset()],
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
