const config = {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-surface": "#191c1e",
            "inverse-primary": "#bec6e0",
            "secondary-fixed-dim": "#ffb690",
            "tertiary-fixed": "#d5e3fd",
            "outline-variant": "#c6c6cd",
            "surface-variant": "#e0e3e5",
            "on-error-container": "#93000a",
            "on-primary-container": "#7c839b",
            "tertiary-container": "#0d1c2f",
            "primary-fixed-dim": "#bec6e0",
            "surface-container-high": "#e6e8ea",
            "primary-fixed": "#dae2fd",
            "on-surface-variant": "#45464d",
            "on-secondary-fixed-variant": "#783200",
            "surface-container": "#eceef0",
            "on-secondary": "#ffffff",
            "primary-container": "#131b2e",
            "secondary-container": "#fd761a",
            "error-container": "#ffdad6",
            "surface-container-lowest": "#ffffff",
            "surface": "#f7f9fb",
            "primary": "#000000",
            "surface-container-highest": "#e0e3e5",
            "inverse-on-surface": "#eff1f3",
            "secondary-fixed": "#ffdbca",
            "tertiary": "#000000",
            "on-error": "#ffffff",
            "surface-dim": "#d8dadc",
            "surface-bright": "#f7f9fb",
            "surface-container-low": "#f2f4f6",
            "error": "#ba1a1a",
            "on-primary-fixed": "#131b2e",
            "on-background": "#191c1e",
            "tertiary-fixed-dim": "#b9c7e0",
            "background": "#f7f9fb",
            "on-primary-fixed-variant": "#3f465c",
            "on-tertiary-fixed": "#0d1c2f",
            "secondary": "#9d4300",
            "on-tertiary": "#ffffff",
            "on-tertiary-container": "#76859b",
            "on-primary": "#ffffff",
            "surface-tint": "#565e74",
            "inverse-surface": "#2d3133",
            "on-secondary-container": "#5c2400",
            "outline": "#76777d",
            "on-secondary-fixed": "#341100",
            "on-tertiary-fixed-variant": "#3a485c"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          "spacing": {
            "margin-mobile": "16px",
            "base": "4px",
            "gutter": "24px",
            "container-max": "1280px",
            "stack-md": "16px",
            "stack-lg": "32px",
            "stack-sm": "8px",
            "margin-desktop": "48px"
          },
          "fontFamily": {
            "headline-lg": ["Inter", "sans-serif"],
            "label-md": ["Inter", "sans-serif"],
            "headline-xl": ["Inter", "sans-serif"],
            "label-sm": ["Inter", "sans-serif"],
            "body-lg": ["Inter", "sans-serif"],
            "body-md": ["Inter", "sans-serif"],
            "headline-md": ["Inter", "sans-serif"]
          }
        }
      }
    },
  },
};

export default config;
