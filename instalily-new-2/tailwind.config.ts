import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'slide-in-from-left': {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(0)' },
  			},
  			'slide-in-from-right': {
  				'0%': { transform: 'translateX(100%)' },
  				'100%': { transform: 'translateX(0)' },
  			},
  			'slide-in-from-top': {
  				'0%': { transform: 'translateY(-100%)' },
  				'100%': { transform: 'translateY(0)' },
  			},
  			'slide-in-from-bottom': {
  				'0%': { transform: 'translateY(100%)' },
  				'100%': { transform: 'translateY(0)' },
  			},
  			'slide-out-to-left': {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-100%)' },
  			},
  			'slide-out-to-right': {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(100%)' },
  			},
  			'slide-out-to-top': {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(-100%)' },
  			},
  			'slide-out-to-bottom': {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(100%)' },
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			'fade-out': {
  				'0%': { opacity: '1' },
  				'100%': { opacity: '0' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
  			'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
  			'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
  			'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
  			'slide-out-to-top': 'slide-out-to-top 0.3s ease-in',
  			'slide-out-to-bottom': 'slide-out-to-bottom 0.3s ease-in',
  			'slide-out-to-left': 'slide-out-to-left 0.3s ease-in',
  			'slide-out-to-right': 'slide-out-to-right 0.3s ease-in',
  			'fade-in': 'fade-in 0.3s ease-out',
  			'fade-out': 'fade-out 0.2s ease-in',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
