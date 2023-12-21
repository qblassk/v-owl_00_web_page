import { useSnapshot } from 'valtio';

import state from '../store';

import aboutData from '../store/aboutData.json';

export default function About() {
   const snap = useSnapshot(state);

   const currentLanguageData = aboutData[snap.language] || aboutData.default;

   return (
      <div id="about" className="w-screen  flex flex-col justify-center items-center text-center pt-[10vh]">
         <p className="inline-block pl-2 pr-2 text-white text-xl font-thin bg-white bg-opacity-50">
            {currentLanguageData.title}
         </p>
         <p className="w-[55vw] text-white font-thin text-lg text-center pt-[3vh]">{currentLanguageData.content}</p>
      </div>
   );
}
