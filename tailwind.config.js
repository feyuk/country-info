module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
           50: 'hsl(0, 0%, 98%)',
          700: 'hsl(209, 23%, 22%)',
          800: 'hsl(207, 26%, 17%)',
        },
      },
      spacing: {
        '18': '4.5rem',
      },
      boxShadow: {
        sm: '0 0 0.25rem rgba(0, 0, 0, 0.2)',
        md: '0 0 0.5rem rgba(0, 0, 0, 0.05)',
        lg: '0 0 0.5rem rgba(0, 0, 0, 0.3)',
      },
      container: {
        screens: {
          'xl': '1312px'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
