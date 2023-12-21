import { proxy } from 'valtio';

const userLanguage = navigator.language || navigator.userLanguage;

let language;

if (userLanguage.startsWith('it')) {
   language = 'it';
} else if (userLanguage.startsWith('es')) {
   language = 'es';
} else if (userLanguage.startsWith('en')) {
   language = 'en';
} else {
   language = 'en';
}

const state = proxy({
   language: language,
   intro: true,
   color: '#537473',
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './threejs.png',
   fullDecal: './threejs.png',
});

export default state;
