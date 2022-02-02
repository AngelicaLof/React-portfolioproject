import React from "react";
import { useState } from 'react';
import VideoArea from "./video";

//receptsida med video och länkar med recept

const RecipePage = () => {
    
        
        
    
    return ( 
        <div className="recipetop"> 
            
            <h2>Pizza recipe</h2>
<div className="recipevideo">
            <div><VideoArea></VideoArea></div>
            
        </div>
        
    <div className="recipecolumn">
<div className="recicolumn"><p style={{ textAlign:'center', fontSize: '22px'}}>Pizza dough recipe</p>
<ul className="recilist">
    <li>25 grams of yeast</li>
    <li>2½ dl water</li>
    <li>2 tablespoons of oil</li>
    <li>7 dl flour</li>
    <li>salt</li>
    </ul></div>
<div className="recicolumn"><b>Instructions:</b> Sieve the flour/s and salt on to a clean work surface and make a well in the middle.
In a jug, mix the yeast, sugar and oil into 650ml of lukewarm water and leave for a few minutes, then pour into the well.
Using a fork, bring the flour in gradually from the sides and swirl it into the liquid. Keep mixing, drawing larger amounts of flour in, and when it all starts to come together, work the rest of the flour in with your clean, flour-dusted hands. Knead until you have a smooth, springy dough.

</div>
<div className="recicolumn">
     <h3>More recipes</h3>
     <ul>
        <li className="recilink"><a href="https://www.arla.se/recept/pizza/">Classic pizza</a> </li>
       <li className="recilink"> <a href="https://www.koket.se/pizza-cacio-e-pepe">Pizza cacio e pepe</a></li>
       <li className="recilink"> <a href="https://www.koket.se/pizza-bianco-med-portabello-mozzarella-och-rodlok">Pizza bianco</a></li>
        </ul>
</div>
    </div>
    
    </div>
        

     );
};
 
export default RecipePage;