const colorFunction =
  (colorName) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${colorName}), ${opacityValue})`;
    }
    return `rgba(var(${colorName}))`;
  };

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
