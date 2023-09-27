/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        screens: {
            sm: '100px',
            md: '768px',
            lg: '1024px',
        },
        // colors: {
        //     // background: 'rgb(21,21,21)',
        // },
        extend: {},
    },
    plugins: [],
};
