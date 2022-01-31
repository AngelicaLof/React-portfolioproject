import React from "react";

import pizzabild from "../components/pizzabild.png";

//infopage om pizza med text och bild

const AboutPage  = () => {
    return ( 
      <div className="history">
        <h1 style={{paddingTop: '50px'}}>The history of pizza</h1>
         <div className="hist"> <div className="histinfo"><p id='para'>The history of pizza begins in antiquity, when various ancient cultures produced basic flatbreads with several toppings.
         A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius, to which toppings were then added. Modern pizza evolved from similar flatbread dishes in Naples, 
         Italy, in the 18th or early 19th century. The word pizza was first documented in 997 AD in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly 
         eaten in Italy and by emigrants from there. This changed after World War II when Allied troops stationed in Italy came to enjoy pizza along with other Italian foods. 
         </p></div></div>
      <div className='bildpizza'>
      <div><img src= {require  ('../components/pizzabild.png')} alt='bild' style= {{heigth: '100px', width: '210px'}}/> </div></div> 
        
        </div>

     );
}
 
export default AboutPage;