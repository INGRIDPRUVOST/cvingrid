import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
           <Navigation />
           <div className="homeContent">
               <div className="content">
                   <h1>INGRID PRUVOST</h1>
                   <h2>Développeuse web et web mobile</h2>
                   <div className="pdf">
                       <a href="./media/CV.pdf" target="blank">Télécharger CV</a>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Home;