import React from 'react'


function SectionRight({data}) {
    return (
        <section className="sectionRight">
            <h3>Cart Items</h3>
            {data.data.map((e,i)=>(
                <div key={i}>{e.title} <button>+</button> <button>-</button></div>
            ))}
        </section>
    );

}

export default SectionRight;