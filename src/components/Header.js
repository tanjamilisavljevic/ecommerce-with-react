import React from 'react';


function Header(props) {
    return (
        <div>
            <header className="header">
                <div><h1>Tanja&Choka</h1></div>
                <div>
                    <img className={"icons"} src="https://img.icons8.com/color/48/26e07f/shop-local.png"/>
                    <img className={"icons userIcon"}  src="https://img.icons8.com/color-glass/48/000000/gender-neutral-user.png"/>
                </div>
            </header>
        </div>
    );
}

export default Header