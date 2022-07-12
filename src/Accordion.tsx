import React, {useState} from "react";

type ItemsType = {
    name: string,
    id: string
}

type AccordionPropsType = {
    title: string
    items: ItemsType[]
    onClickName: () => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClickName: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            {collapsed && <AccordionBody items={props.items} onClickName={props.onClickName}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering...')
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering...')
    return (
        <ul>
            {props.items.map((i, index) => <li key={i.id} onClick={props.onClickName}>{i.name}</li>)}
        </ul>
    )
}