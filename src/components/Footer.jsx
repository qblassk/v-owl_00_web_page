import { useSnapshot } from 'valtio';

import state from '../store';

import contactData from '../store/contactData.json';

export default function Footer() {
   const snap = useSnapshot(state);

   const currentLanguageData = contactData[snap.language] || contactData.default;

   return (
      <div id="contact" className="w-screen flex justify-between  pt-[10vh] pb-[10vh] pl-[12vw] pr-[12vw]">
         <div>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1.5vh]">
               <b>Contacto</b>
            </p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1.5vh]">Nosotros</p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1.5vh]">Servicios</p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1.5vh]">Productos</p>
         </div>

         <div>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1vh]">
               <b>Aplicaciones</b>
            </p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1vh]">Architecture Viewer</p>
         </div>

         <div>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1vh]">
               <b>Cases</b>
            </p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1vh]">Casa Gilardi</p>
            <p className="w-[15vw] text-white font-thin text-lg text-left pt-[1vh]">Housing Views</p>
         </div>

         <div>
            <p className="w-[15vw] text-white font-thin text-lg text-left  pt-[1vh]">
               <b>Info / Comunidad</b>
            </p>
            <p className="w-[15vw] text-white font-thin text-lg text-left  pt-[1vh]">Blog</p>
            <p className="w-[15vw] text-white font-thin text-lg text-left  pt-[1vh]">Articles</p>
            <p className="w-[15vw] text-white font-thin text-lg text-left  pt-[1vh]">VR Web</p>
         </div>
      </div>
   );
}
