import React from 'react'


function SectionRight(props) {
    return (
        <section className="sectionRight">
            {props.data.map((e,i)=>(
                <div>{e.title} <button>+</button> <button>-</button></div>
            ))}
        </section>
    );

}

export default SectionRight;