import React, {useState} from 'react';
import s from'./App.module.css';
import {Accordion} from "./Accordion";
import {Rating, RatingValueType} from "./Rating";
import {OnOff} from "./OnOff";

type AppTitlePropsType = {
    title: string
}

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    console.log('App rendering...')
    return (
        <div className={s.app}>
            <AppTitle title={'This is APP component'}/>
            <Rating/>
            <Accordion title={'Accordion1'} />
            <Accordion title={'Accordion2'} />
            <OnOff />
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering...')
    return <h1>{props.title}</h1>
}

export default App;
