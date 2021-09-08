import React, {useState} from 'react';
import '../FooterAndLeftFilter.css';
import '../App.css';

export default function SectionLeft(props) {

    let [products, setProducts] = useState([]);

    function sortLowToHigh() {
        setProducts = props.data.data.sort(function (a, b) {
            return a.price - b.price;
        });
    }

        function sortHighToLow() {
            setProducts = props.data.data.sort(function (a, b) {
                return b.price - a.price;
            });
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

