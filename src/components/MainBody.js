import React from 'react'
import ReactDOM from 'react-dom';
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";



function MainBody(props) {
    console.log(props.data)

    return (
            <main className="main">
                <SectionLeft data={props} />
                <SectionRight />
            </main>
    );

}

export default MainBody;
