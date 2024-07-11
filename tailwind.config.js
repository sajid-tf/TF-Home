/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fafafa',
        black: '#000',
        lightBlack: '#666666',
        lightWhite: '#f4f4f4',
        primary: '#182F59',
        secondary: '#5BBC2E',
        secondaryLightBG: '#F2F2F2',
        sky: '#4285F4',
        yellow: '#F5BB00',
        red: '#DB162F',
        lineColor: '#E3E8F0',
        purple: '#2C235A',
        purpleTwo: '#7A6AEC',
        redTwo: '#E4202C',
        yellowTwo: '#FFC922',
        skyTwo: '#007BFF',
        skyThree: '#0978DF',
        deepGreen: '#006D38',
        strongWhite: '#ffffff',
        lightBGText: '#2C2C33',
        lightBGBodyText: '#404040',
        borderLine: '#CCD1D6',
        cardBG: '#f0f0f0',
        redThree: '#FF2B38',
        blackTwo: '#030412',
        ligthBg: '#FFF',
        darkBgText: '#E6E6E6',
        heroBlueBG: '#0978df66',
        secondaryTwo: '#1BD0A5',
        yellowThree: '#B59947',
        purpleThree: '#320564',
        green: '#20963A',
        skyFour: '#11ADF7'
      },
      fontFamily: {
        primary: ['Poiret_One', 'sans-serif'],
        secondary: ['Dosis', 'sans-serif'],
        tertiary: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'greenDrop': '0px 4px 4px 0px rgba(91, 188, 46, 0.25)',
        'redDrop': '0px 10px 20px 0px rgba(255, 43, 56, 0.25)',
        'greenEbookDrop': '0px 10px 20px 0px rgba(91, 188, 46, 0.25)',
        'yellowDrop': '0px 10px 20px 0px rgba(245, 187, 0, 0.25)',
        'yellowThreeDrop': '0px 10px 20px 0px rgba(181, 153, 71, 0.25)',
        'yellowTwoDrop': '0px 10px 20px 0px rgba(255, 201, 34, 0.25)',
        'purpleDrop': '0px 10px 20px 0px rgba(44, 35, 90, 0.25)',
        'skyDrop': '0px 10px 20px 0px rgba(7, 120, 223, 0.25)',
        'secondaryDrop': '0px 10px 20px 0px rgba(91, 188, 46, 0.25)',
        'secondaryTwoDrop': '0px 10px 20px 0px rgba(27, 208, 165, 0.25)',
        'card': '0px 1px 2px 0px rgba(0, 70, 127, 0.12)',
        'heroDropShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'conciergeDropShadow': '6.5px 6.5px 13px 0px rgba(32, 150, 58, 0.16)',
      },
      backgroundImage: {
        region: "url('/images/regional-office/regionBg.png')",
        heroBgTwo: "url('/images/hero/heroBgTwo.png')",
        worldMap: "url('/images/world-map/world-map.svg')"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInTwo: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideLeftIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeftOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRightIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUpIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUpInReverse: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUpOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        reverseRotate: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        bounces: {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        primaryShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(24, 47, 89, 0.75)' },
          '100%': { boxShadow: '0 0 0 15px rgba(24, 47, 89, 0)' }
        },
        blinkShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(24, 47, 89, 0.75)' },
          '100%': { boxShadow: '0 0 0 8px rgba(24, 47, 89, 0)' }
        },
        blinkShadowSlowly: {
          '0%': { boxShadow: '0 0 0 0 rgba(24, 47, 89, 0.75)' },
          // '50%': { boxShadow: '0 0 0 2px rgba(10, 40, 80, 0.70)' },
          '100%': { boxShadow: '0 0 0 4px rgba(24, 47, 89, 0)' }
        },
        secondaryShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(91, 188, 46, 0.75)' },
          '100%': { boxShadow: '0 0 0 15px rgba(91, 188, 46, 0)' }
        },
        skyShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(7, 120, 223, 0.75)' },
          '100%': { boxShadow: '0 0 0 15px rgba(7, 120, 223, 0)' }
        },
        yellowShadow: {
          '0%': { boxShadow: '0 0 0 0 rgba(245, 187, 0, 0.75)' },
          '100%': { boxShadow: '0 0 0 15px rgba(245, 187, 0, 0)' }
        },
        expandWidth: {
          '0%': { width: '85%' },
          '100%': { width: '100%' }
        },
        blind: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',
        slideLeftIn: 'slideLeftIn 0.5s ease-in-out forwards',
        slideLeftOut: 'slideLeftOut 0.5s ease-in-out forwards',
        slideRightIn: 'slideRightIn 0.5s ease-in-out forwards',
        slideRightOut: 'slideRightOut 0.5s ease-in-out forwards',
        slideUpIn: 'slideUpIn 0.5s ease-in-out forwards',
        slideUpOut: 'slideUpOut 0.5s ease-in-out forwards',
        slideUpInReverse: 'slideUpInReverse 0.5s ease-in-out forwards',
        rotate: 'rotate 2s linear',
        reverseRotate: 'reverseRotate 2s linear',
        bounces: 'bounces 1s infinite',
        shadowBouncePrimary: 'primaryShadow 1.2s infinite',
        blinkShadowSlowly: 'blinkShadowSlowly 1.5s infinite',
        blinkShadow: 'blinkShadow 1.2s infinite',
        shadowBounceSecondary: 'secondaryShadow 1.2s infinite',
        shadowBounceSky: 'skyShadow 1.2s infinite',
        shadowBounceYellow: 'yellowShadow 1.2s infinite',
        expandWidth: 'expandWidth 0.5s ease-in-out forwards',
        blind: 'blind 1s ease-in-out infinite',
        fadeInTwo: 'fadeInTwo 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
