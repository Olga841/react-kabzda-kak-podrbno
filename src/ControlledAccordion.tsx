import React, {useState} from "react";

type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

type ControlledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

export function ControlledAccordion(props: ControlledAccordionPropsType) {
    console.log('ControlledAccordion rendering...')
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} onClick={() => props.onClick(!props.collapsed)}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: ControlledAccordionTitlePropsType) {
    console.log('AccordionTitle rendering...')
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering...')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}