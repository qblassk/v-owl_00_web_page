import { useSnapshot } from 'valtio';

import state from '../store';

import contactData from '../store/contactData.json';

export default function Contact() {
   const snap = useSnapshot(state);

   const currentLanguageData = contactData[snap.language] || contactData.default;

   return (
      <div id="contact" className="w-screen h-screen flex flex-col justify-center items-center text-center pt-[10vh]">
         <p className="inline-block pl-2 pr-2 text-white text-xl font-thin bg-white bg-opacity-50">
            {currentLanguageData.title}
         </p>
         <p className="w-[55vw] text-white font-thin text-lg text-center pt-[3vh]">{currentLanguageData.contentA}</p>
         <p className="w-[55vw] text-white font-thin text-lg text-center pt-[1vh]">{currentLanguageData.contentB}</p>
         <p className="w-[55vw] text-white font-thin text-lg text-center pt-[1vh]">hello@v-owl.com</p>
      </div>
   );
}
