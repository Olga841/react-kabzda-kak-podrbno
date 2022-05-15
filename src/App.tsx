import React from 'react';
import './App.css';
import {Accordion} from "./Accordion";

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

function Rating() {
    console.log('Rating rendering...')
  return (
      <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
  )
}

function Star() {
    return <div>star</div>
}

function AppTitle() {
    console.log('AppTitle rendering...')
    return <>This is APP component</>
}

export default App;
