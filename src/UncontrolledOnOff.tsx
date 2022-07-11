import React, {ChangeEvent, useRef, useState} from "react";

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

    const [value, setValue] = useState< string >('')
    const [parentValue, setParentValue] = useState< string >('')
    const elem = useRef<HTMLInputElement>(null)
    const [checked, setChecked] = useState<boolean>(true)
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setParentValue(e.currentTarget.value)
    }

    function onClickHandler () {
    setValue(elem.current?.value || '')
    }

    function onChangeChecked(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.currentTarget.checked)
        console.log(checked)
    }


    return (
        <>
            <div onClick={() => props.onClick(!props.on)} style={onStyles}>On</div>
            <div onClick={() => props.onClick(!props.on)} style={offStyles}>Off</div>
            <div style={indicatorStyles}></div>
            <input ref={elem}/> - {value}<button onClick={onClickHandler}>Send</button>
            <input value={parentValue} onChange={onChangeHandler}/> -{parentValue}

            <input type={"checkbox"} checked={checked} onChange={onChangeChecked}/>
        </>
    )
}