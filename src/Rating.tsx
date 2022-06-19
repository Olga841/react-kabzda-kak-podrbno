import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type StarPropsType = {

    selected: boolean
}
type RatingPropsType = {
    value: RatingValueType
}

export function  Rating(props: RatingPropsType) {
    const [value, setValue] = useState(0)
    console.log('UncontrolledRating rendering...')
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span>{props.selected ? <b> star </b> : ' star '}</span>
}