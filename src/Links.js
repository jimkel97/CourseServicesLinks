import React from "react";

function Links(props) {
    return(
        <div>
        <p><strong><a href={props.url} target="_blank">{props.site}</a></strong></p>
        </div>
    )
}

export default Links