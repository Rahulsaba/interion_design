import type { NextConfig } from "next";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

try {
  const framerMotionPackagePath = require.resolve("framer-motion/package.json");
  // #region agent log
  fetch("http://127.0.0.1:7306/ingest/2036b00e-37c3-47b3-9077-4c8bfcc3e38f", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "2b0de7" },
    body: JSON.stringify({
      sessionId: "2b0de7",
      runId: "pre-fix",
      hypothesisId: "H2",
      location: "next.config.ts:6",
      message: "framer-motion resolved successfully during Next config load",
      data: { framerMotionPackagePath },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown resolve error";
  // #region agent log
  fetch("http://127.0.0.1:7306/ingest/2036b00e-37c3-47b3-9077-4c8bfcc3e38f", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "2b0de7" },
    body: JSON.stringify({
      sessionId: "2b0de7",
      runId: "pre-fix",
      hypothesisId: "H1",
      location: "next.config.ts:22",
      message: "framer-motion resolution failed during Next config load",
      data: { error: message },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
}

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
      {
        pathname: "/images/**",
        search: "?v=2",
      },
      {
        pathname: "/sliders_image/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/fav/favicon.ico",
      },
      {
        source: "/apple-touch-icon.png",
        destination: "/fav/apple-touch-icon.png",
      },
      {
        source: "/site.webmanifest",
        destination: "/fav/site.webmanifest",
      },
      {
        source: "/android-chrome-192x192.png",
        destination: "/fav/android-chrome-192x192.png",
      },
      {
        source: "/android-chrome-512x512.png",
        destination: "/fav/android-chrome-512x512.png",
      },
      {
        source: "/favicon-16x16.png",
        destination: "/fav/favicon-16x16.png",
      },
      {
        source: "/favicon-32x32.png",
        destination: "/fav/favicon-32x32.png",
      },
    ];
  },
};

// #region agent log
fetch("http://127.0.0.1:7306/ingest/2036b00e-37c3-47b3-9077-4c8bfcc3e38f", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f2df8a" },
  body: JSON.stringify({
    sessionId: "f2df8a",
    runId: "pre-fix",
    hypothesisId: "H1",
    location: "next.config.ts:46",
    message: "Next config images settings at load",
    data: { hasImagesConfig: Boolean(nextConfig.images), images: nextConfig.images ?? null },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export default nextConfig;
