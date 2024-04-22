import React from 'react';
import logoImg from '../assets/SWDlogo.svg';
import instagramLogo from '../assets/instagram.png';
import facebookLogo from '../assets/facebook.png';
import linkedinLogo from '../assets/linkedin.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerkontakt">
                <ul>
                    <h4>Kontakt info</h4>
                    <li>Adresse:</li>
                    <li>Ringvej syd 104</li>
                    <li>8260 Viby J</li>
                    <br />
                    <li>Tlf.: 00 00 00 00</li>
                    <li>E-mail: info@evergreen.dk</li>
                    <li>CVR.: 12 34 56 78</li>
                </ul>
            </div>

            <div className="footerlogo">
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="somelinks">
                <a href="https://www.instagram.com/">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/?locale=da_DK">
                    <img src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/home">
                     <img src={linkedinLogo} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
}