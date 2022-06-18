import React, {useState} from "react";


export function Rating() {
    const [value, setValue] = useState(0)
    console.log('Rating rendering...')
    return (
        <div>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 0} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    setValue: (value: 1 | 2 | 3 | 4 |5) => void
    selected: boolean
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setValue(5)}}>{props.selected ? <b> star </b> : ' star '}</span>
}