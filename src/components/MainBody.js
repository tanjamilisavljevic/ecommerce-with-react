import React from 'react'
import SectionLeft from "./LeftFilter";
import SectionRight from "./RightSection";



function MainBody() {
    return (
            <main className="main">
                <SectionLeft/>
                <SectionRight/>
            </main>
    );

}

export default MainBody;