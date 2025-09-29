/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'amazon-orange': {
          DEFAULT: 'hsl(38, 100%, 50%)',
          50: '#fff8eb',
          100: '#ffefd5',
          200: '#fde0b9',
          300: '#fbd19d',
          400: '#f9c281',
          500: 'hsl(38, 100%, 50%)', // #f7b365
          600: '#f5a449',
          700: '#f3952d',
          800: '#f18611',
          900: '#d56f00',
        },
        'amazon-navy': {
          DEFAULT: 'hsl(217, 32%, 17%)',
          50: '#eef2f7',
          100: '#d8e0eb',
          200: '#b1c1d7',
          300: '#8aa2c3',
          400: '#6383af',
          500: 'hsl(217, 32%, 17%)', // #3c5a87
          600: '#2f486d',
          700: '#233653',
          800: '#172439',
          900: '#0b121e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}