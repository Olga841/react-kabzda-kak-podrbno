import React from 'react';
import './App.css';
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";

function App() {
    console.log('App rendering...')
    return (
        <div>
            <AppTitle/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Accordion1'}/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering...')
    return <>This is APP component</>
}

export default App;
