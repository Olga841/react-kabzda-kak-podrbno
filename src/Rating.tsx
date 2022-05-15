import React from "react";

export function Rating() {
    console.log('Rating rendering...')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return <div>star</div>
}