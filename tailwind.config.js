/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                pinkPrimary: '#DA80FD',
                pinkSecondary: '#FDC8DF',
                pinkThird: '#DD9AFF',
                pinkForth: '#FF99DB',
                pinkFifth: '#FF9FDD',
                pinkSixth: '#DE9BFF',
                pinkSevenfold: '#C3A6E4',
                bluePrimary: '#80B4FD',
                blueSecondary: '#C3EBFF',
                blueThird: '#A1E3FF',
                blueForth: '#9AB8FC',
                blueFith: '#72B3F6',
                blueSixth: '#85d5fd',
                yellowPrimary: '#dc8530',
                yellowSecondary: '#F4E0C8',
                yellowThird: '#FBA980',
                yellowForth: '#F7CA6D',
                blackPrimary: '#242424',
                grayPrimary: '#6F6F6F',
                graySecondary: '#f6f6f6',
            },
            fontSize: {
                'xxs': '10px',
            }
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            times: ['Times New Roman', 'sans-serif']
        },
    },
    plugins: [],
}

