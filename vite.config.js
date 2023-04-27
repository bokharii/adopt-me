import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", //goes into src directory and finds the html file, and identifies the App.js
});
