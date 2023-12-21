const SetFavicon = () => {
   // Verifica el modo de color preferido del usuario
   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

   console.log(prefersDarkMode);

   // Obtiene el elemento de favicon
   const favicon = document.querySelector('link[rel="icon"]');

   // Cambia el favicon según el modo de color preferido
   if (prefersDarkMode) {
      favicon.href = '/v-owl-white.png';
   } else {
      favicon.href = '/v-owl-black.png';
   }
};

export default SetFavicon;

/* const SetFavicon = () => {
   // Obtiene el elemento de favicon
   const favicon = document.querySelector('link[rel="icon"]');

   // Intenta obtener el color de fondo desde la etiqueta html
   const backgroundColorHtml = document.defaultView.backgroundColor;

   console.log(window.getComputedStyle(document.body).backgroundColor);

   // Intenta obtener el color de fondo desde el body
   const backgroundColorBody = window.getComputedStyle(document.body).backgroundColor;

   // Intenta obtener el color de fondo desde un elemento específico (ajusta el selector según tu estructura)
   const specificElement = document.querySelector('.mi-elemento-especifico');
   const backgroundColorSpecific = specificElement ? window.getComputedStyle(specificElement).backgroundColor : null;

   // Usa el primer color de fondo que no sea transparente
   const backgroundColor =
      [backgroundColorHtml, backgroundColorBody, backgroundColorSpecific].find(
         (color) => color && color !== 'rgba(0, 0, 0, 0)'
      ) || 'white';

   console.log(backgroundColor);

   // Calcula la luminancia del color de fondo
   const luminance = getLuminance(backgroundColor);

   // Elige el color de fondo que tiene mejor contraste
   if (luminance > 0.5) {
      // Si el fondo es claro, elige el favicon oscuro
      favicon.href = '../../public/vite.svg';
   } else {
      // Si el fondo es oscuro, elige el favicon claro
      favicon.href = '../../public/vite.svg';
   }
};

// Función para calcular la luminancia de un color
const getLuminance = (color) => {
   if (!color) {
      return 0;
   }

   const rgb = color.match(/\d+/g);

   if (!rgb) {
      return 0;
   }

   const [r, g, b] = rgb.map((value) => {
      value = Number(value) / 255;
      return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
   });

   return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export default SetFavicon; */
