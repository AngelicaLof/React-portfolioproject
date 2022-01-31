import React from "react";
import Bildcvv from "../components/Bildcvv.jpg";
import Footer from "../components/Footer";

//infopage med profil och importerad footer

const HomePage = () => {
    return ( 
        <div className="homeinfo">
            <div className="flex-container">
  <div className="infodiv"><p className="homehead">Portfolio info</p></div>
  <div className="infodiv"> <img src= {require  ('../components/Bildcvv.jpg')} alt='bild' style={{borderRadius:'7px'}}/> </div>
    
</div>
            <div className="flex-container"> 
        <div className="infodiv2"> <p className="hometext">About me, information Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Fuga magnam dolore recusandae voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam 
        dolore recusandae voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dolore 
        recusandae voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dolore recusandae 
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dolore recusandae voluptatum.</p></div>
   
</div> 
               <Footer></Footer>
               </div>
     );
}
 
export default HomePage;