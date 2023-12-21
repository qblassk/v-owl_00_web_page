import { useEffect, useState } from 'react';

export default function App() {
   cont[(estado, setEstado)] = useState(true);

   useEffect(() => {
      fetch('hahahah')
         .then((res) => {
            return res.json();
         })
         .then((res) => {
            console.log(res);
            setEstado(res);
         });
   }, []);

   const currentLanguageData = contactData[snap.language] || contactData.default;

   return (
      <div className="App">
         {estado && (
            <div>
               <p>{estado.title}</p>
            </div>
         )}
      </div>
   );
}
