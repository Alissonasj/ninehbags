/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    theme: {
        screens: {
            '2x-lg': { max: '1535px' },
            // => @media (max-width: 1535px)
            // 2x-large

            'x-lg': { max: '1279px' },
            // => @media (max-width: 1279px)
            // x-large

            lg: { max: '1023px' },
            // => @media (max-width: 1023px)
            // large

            'x-md': { max: '899px' },
            // => @media (max-width: 899px)
            // x-medium

            md: { max: '767px' },
            // => @media (max-width: 767px)
            // medium

            'x-sm': { max: '639px' },
            // => @media (max-width: 639px)
            // x-small

            sm: { max: '599px' },
            // => @media (max-width: 599px)
            // s-small

            's-sm': { max: '399px' },
            // => @media (max-width: 399px)
            // 2s-small

            'custom-sm': { max: '512px' },
        },

        extend: {
            colors: {
                primary: '#CF8C95',
                'gray-dark': {
                    50: '#FFFFFF',
                    75: '#FDFDFD',
                    100: '#F8F8F8',
                    200: '#E6E6E6',
                    300: '#D5D5D5',
                    400: '#B1B1B1',
                    500: '#909090',
                    600: '#6C6C6C',
                    700: '#464646',
                    800: '#222222',
                    900: '#000000',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
