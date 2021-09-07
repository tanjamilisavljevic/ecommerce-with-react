import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../FooterAndLeftFilter.css';

function SectionLeft() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    // const [price, setPrice] = useState([price]);
    // useEffect(() => {
    //     const sortArray = type => {
    //         const types = {
    //             title: 'title',
    //             price: 'price'
    //         };
    //
    //         const price = types[type];
    //         const sorted = [...products].sort((a, b) => b[price] - a[price]);
    //         setProducts(sorted);
    //     };
    //     sortArray(price);
    // }, [price]);



    // function sortProductsAscending () {
    //     console.log(products.price.sort((a,b) => {return a-b}))
    //     console.log(products);
    //     return products;
    // }
    //


    // let priceMorethan100 = products.filter((product,index)=>product.price > 100);
    //  console.log(priceMorethan100);
    //  return priceMorethan100;


    return ('hi' )
    //     <section className="sectionLeft">
    //         <div className="sectionLeftWrapper">
    //             <div className="dropdown">
    //                 <span className="leftTitle">Sort by</span>
    //
    //
    //                 <div className="dropdown-content" onClick={sortProductsAscending()}>
    //                 {/*    /!*<p  onChange={(e) => setPrice(e.target.value)}>*!/*/}
    //                     {/*    Price low to high </p>*/}
    //                 </div>
    //
    //
    //                 <div className="dropdown-content">
    //                     <p> Price high to low </p>
    //                 </div>
    //
    //
    //             </div>
    //         </div>
    //     </section>
    // );

}

export default SectionLeft;