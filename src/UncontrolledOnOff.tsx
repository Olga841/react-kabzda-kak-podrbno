import React from "react";

type UncontrolledOnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    const onStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyles = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on ? 'white' : 'red',
        display: 'inline-block'
    }
    const indicatorStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        background: props.on ? 'green' : 'red',
        display: 'inline-block'
    }

    return (
        <>
            <div onClick={() => props.onClick(!props.on)} style={onStyles}>On</div>
            <div onClick={() => props.onClick(!props.on)} style={offStyles}>Off</div>
            <div style={indicatorStyles}></div>
        </>
    )
}