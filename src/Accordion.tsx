import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
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