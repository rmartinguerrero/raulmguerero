// @ts-check
import { defineConfig } from 'astro/config';

//tailwind 4.X
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {    plugins: [tailwindcss()],  }, //Tailwind 4.X
});
