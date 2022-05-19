import React from "react";

//pass props
//h3 property of links

function Links(props) {
    return (<div>
        <h3>Links</h3>
        <a href={ props.github }> { props.github }</a>   
        <a href={ props.linkedin }>{ props.linkedin }</a>                                        
    </div>

    );
}




//export default
export default Links;






//display <h3> element with the text of "Links"
//an <a> element with href and text content set to the URL of users
// github link, passed down as props
//<a> element with href and text content set to URL of linked in passed as prop
// ***make sure 'a' tags displayy users URL of links as their text content
