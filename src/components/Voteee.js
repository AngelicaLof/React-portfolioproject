import React from "react";
import { useState } from 'react';

//knapp med röstningsfunktion
const Voteee = () => {
 const [counter, setCounter] = useState(0);
    const saldo = () => {
        setCounter(counter + 1);
        
        
    };
    return ( 
        <div className="votetype">
            <div className="pizzatype">Capricciosa</div>
            <button className="pizzabutton" onClick={saldo} >VOTE</button>
            <p className="counter">{counter}</p>
            
        </div>
     );
};
 
export default Voteee;