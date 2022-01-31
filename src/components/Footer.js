import React from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

//footer med olika divar och länkar till social media

const Footer = () => {
    return ( 

        <div className="container-footer">
            <footer className="footer1">
<div className="footer-container">
    <div className="footer"><h3>Contact</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dolore recusandae voluptatum </p> </div>
    <div className="footer"><h3>About</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dolore recusandae voluptatum  </p></div>
    <div className="footer"><h3>Social media</h3>
    
        <div className="footerlink"><a href="https://www.facebook.com/angelica.lofland"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/angelicalofland/"><FaInstagramSquare/></a>
        <a href="https://github.com/AngelicaLof"><FaGithubSquare/></a></div>
        
    </div>
    
</div>
<div class="copy">2022 Copyright </div>
</footer>
    </div>
    

     );
}
 
export default Footer;