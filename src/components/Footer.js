import React from 'react';
import '../Footer.css';

export default function Footer(props) {
    return (
        <div>
            <footer className="footer">


                <div className="iconsArea">
                    <h2 className="iconsTitle"> Get in touch </h2>
                    <div className="iconsWrap">
                        <a href="https://www.whatsapp.com/"><img src='./call.png' className="footerIcon"/></a>
                            <a href="https://www.youtube.com/"><img src='./youtube.png' className="footerIcon"/></a>
                                <a href="https://www.instagram.com/"><img src='./instagram.png' className="footerIcon"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
