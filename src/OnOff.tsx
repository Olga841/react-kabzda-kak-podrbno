import React from "react";


type OnOffPropsType = {
    on: boolean
}



export function OnOff(props: OnOffPropsType) {
    const onStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on? 'white' : 'red',
        display: 'inline-block'
    }
    const indicatorStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on? 'green' : 'red',
        display: 'inline-block'
    }

    return (
        <>
            <div style={onStyles}>On</div>
            <div style={offStyles}>Off</div>
            <div style={indicatorStyles}></div>
        </>
    )
}