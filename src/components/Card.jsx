import { Box } from '@mui/material';
import { useSnapshot } from 'valtio';

import state from '../store';

import modelButton from '../assets/img/button/model-white.png';
import arrowButton from '../assets/img/button/arrow-white.png';

const cardImg = (props) => {
   return (
      <div className="pt-[8vh]">
         <img className="max-h-[40vh]" src={props.content.img} alt="Words" />
      </div>
   );
};

const cardText = (props) => {
   const snap = useSnapshot(state);
   let title, descriptionA, descriptionB;

   if (snap.language === 'it') {
      title = props.content.titleIt;
      descriptionA = props.content.descriptionAit;
      descriptionB = props.content.descriptionBit;
   } else if (snap.language === 'es') {
      title = props.content.titleEs;
      descriptionA = props.content.descriptionAes;
      descriptionB = props.content.descriptionBes;
   } else {
      title = props.content.titleEn;
      descriptionA = props.content.descriptionAen;
      descriptionB = props.content.descriptionBen;
   }

   return (
      <div id={props.content.id} className="pt-[10vh]">
         <div className="flex justify-center items-center text-center">
            <h2 className="inline-block pl-2 pr-2 text-white text-xl font-thin bg-white bg-opacity-50">{title}</h2>
            <img className="absolute right-[33.3vw] h-[1.6vh]" src={arrowButton} alt="Words" />
            <a
               className="absolute right-[30vw]"
               href="http://52.67.181.209:3000"
               target="_blank"
               rel="noopener noreferrer"
               style={{ textDecoration: 'none', color: 'inherit' }}
            >
               <img
                  className=" h-[5vh] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                  src={modelButton}
                  alt="Words"
               />
            </a>
         </div>

         <Box sx={{ height: '3vh' }} />

         <div className="w-[55vw] ">
            <p className="text-white font-thin text-lg text-center ">{descriptionA}</p>
         </div>

         <Box sx={{ height: '2.5vh' }} />

         <div className="w-[55vw] ">
            <p className="text-white font-thin text-lg text-center">{descriptionB}</p>
         </div>
      </div>
   );
};

const FinalCard = (props) => {
   return (
      <div className="w-screen flex flex-col items-center justify-center">
         {cardText(props)}
         {cardImg(props)}
         <hr className="white h-[2px] w-[60vw] mt-[10vh]"></hr>
      </div>
   );
};

export default function Card(props) {
   return <FinalCard content={props.content} />;
}
