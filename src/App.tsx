import React from 'react';
import './App.css';
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";

type AppTitlePropsType = {
    title: string
}
function App() {
    console.log('App rendering...')
    return (
        <div>
            <AppTitle title={'This is APP component'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Accordion1'} collapsed={true}/>
            <Accordion title={'Accordion2'} collapsed={false}/>
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering...')
    return <h1>{props.title}</h1>
}

export default App;
