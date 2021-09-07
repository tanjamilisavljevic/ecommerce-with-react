import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../FooterAndLeftFilter.css';

function SectionLeft() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                // response.json()
                setProducts(response.data)
                // console.log(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    function clickHandlerLowToHigh() {
       let priceMorethan100 = products.filter((each,index)=>each.price > 100);
        console.log(priceMorethan100);
        return priceMorethan100;
    }

    function clickHandlerHighToLow() {
        console.log('hi')
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
                    {/*{products.map(product => <p> product.title </p> )}*/}
                </div>
            </div>
        </section>
    );

}

export default SectionLeft;