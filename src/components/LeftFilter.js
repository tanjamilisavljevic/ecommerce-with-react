import React from 'react'
import '../FooterAndLeftFilter.css';


function clickHandlerLowToHigh() {
 console.log({data[1].title});
}
function clickHandlerHighToLow() {
console.log('hi')
}

function SectionLeft() {
    return (
        <section className="sectionLeft">
            <div className="sectionLeftWrapper">
                <div className="dropdown">
                    <span className="leftTitle">Sort by</span>
                    <div className="dropdown-content">
                        <p onClick={clickHandlerLowToHigh}>Price low to high</p>
                    </div>
                    <div className="dropdown-content">
                        <p onClick={clickHandlerHighToLow}>Price high to low</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SectionLeft;