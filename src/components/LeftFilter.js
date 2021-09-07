import React from 'react'
import '../FooterAndLeftFilter.css';
import useFetch from "react-fetch-hook";


function SectionLeft() {
    const {isLoading, error, data} =
        useFetch('https://fakestoreapi.com/products');

    if (isLoading) return "Loading...";
    if (error) return "Error!";

    function clickHandlerLowToHigh() {
        console.log(...data);
    }
    function clickHandlerHighToLow() {
        console.log(...data)
    }
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