import { Routes, Route, Navigate } from 'react-router-dom';

import { HideAppBar, Banner, Card, About, Contact, Footer } from './components';
import Content from './store/Content.js';

function App() {
   return (
      <main>
         <div className="h-screen w-screen fixed top-0 -z-10 bg-gradient-to-b from-primaryColor from-30% to-secondaryColor "></div>

         <Routes>
            <Route
               path="/"
               exact
               element={
                  <div>
                     <HideAppBar />
                     <Banner />
                     {Content.map((item, index) => (
                        <Card key={index} imgRight={index % 2 === 0} content={item} />
                     ))}
                     <About />
                     <Contact />
                     <Footer />
                  </div>
               }
            />

            <Route
               path="/about"
               exact
               element={
                  <div>
                     {/* <HideAppBar />
                     <About />
                     <Footer /> */}
                  </div>
               }
            />

            <Route
               path="/services"
               exact
               element={
                  <div>
                     {/* <HideAppBar />
                     <Services />
                     <Footer /> */}
                  </div>
               }
            />

            <Route
               path="/contact"
               exact
               element={
                  <div>
                     {/* <HideAppBar />
                     <Contact />
                     <Footer /> */}
                  </div>
               }
            />

            {/* <Route path="*" element={<div>404 - no hay paginaaaa weeee</div>} /> */}
            <Route path="*" element={<Navigate replace to="/" />} />
         </Routes>

         {/* app.v-owl.com:3000 */}
         {/* <iframe
            title="Web Content"
            src="http://ec2-52-67-181-209.sa-east-1.compute.amazonaws.com:3000/"
            style={{ position: 'absolute', top: 50, left: 0, width: '50%', height: '50%' }}
         /> */}
      </main>
   );
}

export default App;
