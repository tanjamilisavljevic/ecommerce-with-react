import React from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";



function MainBody(props) {
    console.log(props.data)

    return (
            <main className="main">
                <SectionLeft data={props}/>

                {props.data.map((prop, index) => (
                    <div key={index}>
                        <h2>{prop.title}</h2>
                            <p> {prop.price}$ </p>
                        <button className='addToCart'> Add to Cart </button>
                    </div>
                    ))}

                <SectionRight data={props}/>
            </main>
    );

}

export default MainBody;