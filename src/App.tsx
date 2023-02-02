import React from 'react';
import './App.css';


/*function Hello() {
    alert('Hello, Elen')
}

Hello()*/


function App() {
    console.log("AppRendering")
    return (
        <div className="App">
            <AppTitle/>
            <AccordionTitle/>
            <AccordionBody/>
            <Rating/>
            <Star/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitleRendering")
    return <>This is App component</>
}

function Rating() {
    console.log("RatingRendering")
    return (
        <>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </>
    )
}

/*function Accordion() {
    console.log("AccordionRendering")
    return (
        <div>
            <h3>Menu</h3>

        </div>
    )
}*/

function AccordionTitle() {
    console.log(AccordionTitle)
    return (
        <>
            <h3>Menu</h3>
        </>
    )
}

function AccordionBody() {
    console.log(AccordionBody)
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </>
    )
}

function Star() {
    console.log("StarRendering")
    return (
        <div>
            <>star -</>
            <> star -</>
            <>star -</>
            <>star -</>
        </div>
    )
}


export default App;
