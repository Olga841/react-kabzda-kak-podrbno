import React from "react";

export function Rating() {
    console.log('Rating rendering...')
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }

}