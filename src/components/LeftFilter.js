import React from 'react'
import '../FooterAndLeftFilter.css';

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));


function SectionLeft() {
    return (
        <section className="sectionLeft">
            <div className="sectionLeftWrapper">
                <div className="dropdown">
                    <span className="leftTitle">Sort by</span>
                    <div className="dropdown-content">
                        <p>Price low to high</p>
                    </div>
                    <div className="dropdown-content">
                        <p>Price high to low</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SectionLeft;