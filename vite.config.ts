import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // lovable-tagger disabled to prevent _WS_TOKEN_ errors
    // Uncomment the line below if you're using Lovable.dev and need the tagger
    // mode === 'development' && (await import("lovable-tagger")).componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router-dom")) return "react-vendor";
          if (id.includes("react-helmet-async")) return "helmet-vendor";
          if (id.includes("@tanstack/react-query")) return "query-vendor";
          if (id.includes("lucide-react")) return "icons-vendor";
          if (id.includes("@radix-ui")) return "ui-vendor";
          if (id.includes("react-dom") || id.includes("/react/")) return "react-vendor";
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
