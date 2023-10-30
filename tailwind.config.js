/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    theme: {
        container: {
            center: true,

            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },

        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px)

            xl: { max: '1279px' },
            // => @media (max-width: 1279px)

            lg: { max: '1023px' },
            // => @media (max-width: 1023px)

            '2md': { max: '899px' },
            // => @media (max-width: 899px)

            md: { max: '767px' },
            // => @media (max-width: 767px)

            '2sm': { max: '639px' },
            // => @media (max-width: 639px)

            sm: { max: '599px' },
            // => @media (max-width: 599px)

            xs: { max: '399px' },
            // => @media (max-width: 399px)
        },

        frontFamily: {
            sans: ['Montserrat', 'sans-serif'],
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
};
