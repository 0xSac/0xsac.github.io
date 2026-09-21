import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default function tailwind() {
  return {
    name: '@astrojs/tailwind',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        const postcss =
          typeof config.vite?.css?.postcss === 'object' && config.vite.css.postcss !== null
            ? config.vite.css.postcss
            : {};
        const plugins = Array.isArray(postcss.plugins) ? postcss.plugins : [];

        updateConfig({
          vite: {
            css: {
              postcss: {
                ...postcss,
                plugins: [...plugins, tailwindcss(), autoprefixer()],
              },
            },
          },
        });
      },
    },
  };
}
