import React from "react";
import Logo from '../Assets/image/logo.svg';
import Twitter from '../Assets/image/logo-twitter.svg';
import WhatsApp from '../Assets/image/logo-whatsapp.svg';
import Instagram from '../Assets/image/logo-instagram.svg';
import Facebook from '../Assets/image/logo-facebook.svg';
import Gmail from '../Assets/image/logo-google.svg';


const Footer = () => {
    return(
        <div className="FooterSection">
            <div>
                <img src={Logo} alt="Logo Natal Solidário"/>
            </div>

            <div className="Networks">
                <img src={Twitter} alt="Logo do Twitter" />
                <img src={WhatsApp} alt="Logo do WhatsApp" />
                <img src={Instagram} alt="Logo do Instagram" />
                <img src={Facebook} alt="Logo do Facebook" />
                <img src={Gmail} alt="Logo do Gmail" />
            </div>
        </div>
    )
}

export default Footer;