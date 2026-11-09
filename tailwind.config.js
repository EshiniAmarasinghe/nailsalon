/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF7F8',
          100: '#FDECEF',
          200: '#F9D5DC',
          300: '#F3B8C4',
          400: '#E996A8',
          500: '#D87A8F',
        },
        beige: {
          50: '#FBF7F2',
          100: '#F4EBDF',
          200: '#E8D9C6',
          300: '#DCBEA5',
          400: '#C9AE8E',
        },
        ink: {
          DEFAULT: '#3B2F2F',
          soft: '#7A6A6A',
          muted: '#A59797',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(233,150,168,0.18)',
        'soft-lg': '0 20px 50px rgba(233,150,168,0.22)',
        'hover': '0 15px 35px rgba(201,174,142,0.20)',
        'glow': '0 0 25px rgba(243,184,196,0.6)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

