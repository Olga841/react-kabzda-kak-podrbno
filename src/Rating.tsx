import React, {useState} from "react";


export function Rating() {
    const [value, setValue] = useState(0)
    console.log('Rating rendering...')
    return (
        <div>
            <Star />

            <Star />

            <Star />

            <Star />

            <Star />

        </div>
    )
}


function Star() {
    const [selected, setSelected] = useState(true)

    return (
        <span onClick={() => {setSelected(!selected)}}>{selected ? <b> star </b> : ' star '}</span>)
    /*if (props.selected) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }*/

}