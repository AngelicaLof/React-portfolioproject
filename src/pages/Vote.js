import React from "react";
import { useState } from 'react';
import Votee from "../components/Votee";
import Voteee from "../components/Voteee";
import Footer from "../components/Footer";

//knapp med röstningsfunktion, importerar andra votefiler från components

const Vote = () => {
   const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
        
        
    };
    return ( 
        <div className="vote">
            <h1 style={{paddingTop: '40px'}}>Vote for your favorite pizza!</h1>
            <div className="votetype">
            <div className="pizzatype">Kebab pizza</div>
            <button className="pizzabutton" onClick={saldo} >VOTE</button>
            <p className="counter">{counter}</p>
            
            </div>
           <div> <Votee/></div>
           <div> <Voteee/></div>
           <Footer></Footer>
        </div>
        
     );
};
 
export default Vote;