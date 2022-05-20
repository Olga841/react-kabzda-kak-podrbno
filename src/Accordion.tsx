import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    if (props.collapsed ) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    }

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering...')
    return <h3>{props.title}</h3>
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