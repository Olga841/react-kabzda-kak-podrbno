import React from 'react';
import './App.css';

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

function Accordion() {
    console.log('Accordion rendering...')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
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

function AccordionTitle() {
    console.log('AccordionTitle rendering...')
    return <h3>Menu</h3>
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

export default App;
