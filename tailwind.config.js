module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
  ],
};
