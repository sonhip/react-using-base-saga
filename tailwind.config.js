/* eslint-disable no-unused-vars */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navbar: '#0c0c0c',
                text: '#fff',
                button: '#073B4C',
                hover: '#077296',
                form: 'rgba(255, 255, 255, 0.2);',
                blur: 'rgb(197, 197, 197);',
            },
            backgroundImage: (theme) => ({
                night:
                    "url('https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png')",
                noon:
                    "url('https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722376/after_noon.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
