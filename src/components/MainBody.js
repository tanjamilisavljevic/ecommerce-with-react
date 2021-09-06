import React from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";



function MainBody(props) {
    console.log(props.data)
    return (
            <main className="main">
                <SectionLeft data={props.data}/>
                <SectionRight/>
            </main>
    );

}

export default MainBody;