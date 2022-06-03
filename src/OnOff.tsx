import React, {useState} from "react";

export function OnOff() {
    const [on, setOn] = useState(false)
    const onStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: on ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: on ? 'white' : 'red',
        display: 'inline-block'
    }
    const indicatorStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: on ? 'green' : 'red',
        display: 'inline-block'
    }

    return (
        <>
            <div onClick={() => setOn(true)} style={onStyles}>On</div>
            <div onClick={() => setOn(false)} style={offStyles}>Off</div>
            <div style={indicatorStyles}></div>
        </>
    )
}