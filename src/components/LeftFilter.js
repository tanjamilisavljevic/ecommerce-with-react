import React, {useState} from 'react';
import '../FooterAndLeftFilter.css';
import '../App.css';

export default function SectionLeft(props) {



    function sortLowToHigh() {

        console.log(props)

    }

        function sortHighToLow() {
            return props.data.sort((a,b) => (a.price < b.price)? 1 : -1);

        }

        return (
            <section className="sectionLeft">
                <div className="dropdown">
                    <span className="leftTitle">Filter by</span>
                    <div className="dropdown-content">
                        <p onClick={sortLowToHigh}>Price low to high</p>
                    </div>
                    <div className="dropdown-content">
                        <p onClick={sortHighToLow}>Price high to low</p>
                    </div>
                </div>
            </section>
        )
}

