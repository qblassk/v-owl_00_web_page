import imgBanner from '../assets/img/banner.png';

export default function Banner() {
   return (
      <div className="w-screen flex justify-center h-[90vh] pt-[14vh] mb-[10vh]" id="init">
         <img src={imgBanner} className="max-h-[80vw]" />
      </div>
   );
}
