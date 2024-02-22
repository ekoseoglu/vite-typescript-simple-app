type ColorShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  DEFAULT: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

const brandColorPalette = {
  variants: {
    lighten: ['100', '200', '300', '400'],
    darken: [600, 700, 800, 900],
  },
  weights: {
    lighten: [0.4, 0.3, 0.2, 0.1],
    darken: [0.1, 0.2, 0.3, 0.4],
  },
};

const tailwindConfigResolver = (color: string) => {
  const colorShades: Partial<ColorShades> = {};

  brandColorPalette.variants.lighten.forEach(light => {
    colorShades[light as keyof ColorShades] = 'red';
  });

  colorShades['DEFAULT'] = color;

  brandColorPalette.variants.darken.forEach(dark => {
    colorShades[dark as keyof ColorShades] = 'yellow';
  });

  return colorShades;
};

export { tailwindConfigResolver };
