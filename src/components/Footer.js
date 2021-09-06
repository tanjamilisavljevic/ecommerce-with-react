import React from 'react';
import '../Footer.css';

export default function Footer(props) {
    return (
        <div>
            <footer className="footer">

                <div className="footerTextArea">
                    <h2 className="footerTextTitle"> Company </h2>
                    <p className="footerText"> Who are we</p>
                    <p className="footerText"> Find shop near you</p>
                    <p className="footerText"> Privacy policy</p>
                </div>

                <div className="footerTextAreaCenter">
                    <h1 className="footerTextCenter"> Tanja & Choka SHOP</h1>
                    <p className="footerTextCenter"> Koningin Astridlaan 185 </p>
                    <p className="footerTextCenter">  9000 Gent</p>
                </div>

                <div className="iconsArea">
                    <h2 className="iconsTitle"> Get in touch </h2>
                    <div className="iconsWrap">
                        <a href="https://www.whatsapp.com/"><img src='./twitter.jpg' className="footerIcon"/></a>
                            <a href="https://www.youtube.com/"><img src='./instagram.jpg' className="footerIcon"/></a>
                                <a href="https://www.instagram.com/"><img src='./facebook.jpg' className="footerIcon"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
