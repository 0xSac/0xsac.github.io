import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const hasPlugin = (plugins, name) =>
  plugins.some((plugin) => plugin && typeof plugin === 'object' && plugin.postcssPlugin === name);

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
        const mergedPlugins = [...plugins];

        if (!hasPlugin(mergedPlugins, 'tailwindcss')) {
          mergedPlugins.push(tailwindcss());
        }

        if (!hasPlugin(mergedPlugins, 'autoprefixer')) {
          mergedPlugins.push(autoprefixer());
        }

        updateConfig({
          vite: {
            css: {
              postcss: {
                ...postcss,
                plugins: mergedPlugins,
              },
            },
          },
        });
      },
    },
  };
}
