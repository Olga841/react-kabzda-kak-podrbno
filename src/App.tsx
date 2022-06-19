import React, {useState} from 'react';
import s from'./App.module.css';
import {Accordion} from "./Accordion";
import {UncontrolledRating, RatingValueType} from "./UncontrolledRating";
import {OnOff} from "./OnOff";
import {Rating} from "./Rating";
import {ControlledAccordion} from "./ControlledAccordion";

type AppTitlePropsType = {
    title: string
}

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    console.log('App rendering...')
    return (
        <div className={s.app}>
            <AppTitle title={'This is APP component'}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Accordion1'} />
            <ControlledAccordion title={'Accordion2'} collapsed={collapsed} onClick={setCollapsed}/>
            <OnOff />
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering...')
    return <h1>{props.title}</h1>
}

export default App;
