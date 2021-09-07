import React from 'react';
import '../FooterAndLeftFilter.css';

export default function Footer() {
    return (
        <div>
            <footer className="footer">

                <div className="footerTextArea">
                    <h2 className="footerTitle"> Company </h2>
                    <p className="footerText"> Who are we</p>
                    <p className="footerText"> Find shop near you</p>
                    <p className="footerText"> Privacy policy</p>
                </div>

                <div className="footerTextAreaCenter">
                    <h1 className="footerTextCenterTitle"> Tanja & Choka SHOP</h1>
                    <p className="footerText" id="address"> Koningin Astridlaan 185 </p>
                    <p className="footerText" id="address">  9000 Gent</p>
                </div>

                <div className="iconsArea">
                    <h2 className="footerTitle" id="getInTouch"> Get in touch </h2>
                    <div className="iconsWrap">
                        <a href="https://www.twitter.com/"><img src='./twitter.jpg' className="footerIcon" alt="twitter logo"/></a>
                            <a href="https://www.instagram.com/"><img src='./instagram.jpg' className="footerIcon" alt="instagram logo"/></a>
                                <a href="https://www.facebook.com/"><img src='./facebook.jpg' className="footerIcon" alt="facebook logo"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
