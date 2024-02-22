/** @type {import('tailwindcss').Config} */
import { tailwindConfigResolver } from './src/resolver.ts';

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: tailwindConfigResolver('blue'),
      },
    },
  },
  plugins: [],
};
