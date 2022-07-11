import React, {useState} from 'react';
import s from './App.module.css';
import {Accordion} from "./Accordion";
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating";
import {Rating} from "./Rating";
import {ControlledAccordion} from "./ControlledAccordion";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

type AppTitlePropsType = {
    title: string
}

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)
    console.log('App rendering...')
    return (
        <div className={s.app}>
            <AppTitle title={'This is APP component'}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Accordion1'} />
            <ControlledAccordion title={'Accordion2'} collapsed={collapsed} onClick={setCollapsed}/>

            <UncontrolledOnOff on={on} onClick={setOn}/>
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering...')
    return <h1>{props.title}</h1>
}

export default App;
