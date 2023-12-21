/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primaryColor: '#3d5050',
            secondaryColor: '#BC9066',
         },
      },
   },
   plugins: [],
};
