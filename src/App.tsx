import React from 'react';
import './App.css';
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";

function App() {
    console.log('App rendering...')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering...')
    return <>This is APP component</>
}

export default App;
