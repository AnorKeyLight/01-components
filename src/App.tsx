import React from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


/*function Hello() {
    alert('Hello, Elen')
}

Hello()*/


function App() {
    console.log("AppRendering")
    return (
        <div className="App">
            <PageTitle title={"1 text here"}/>
            <PageTitle title={"2 text here"}/>
            <div><b>Article 1</b></div>
            <Rating value={4}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <div>Article 2</div>
            <Rating value={2}/>
            <div>Article 3</div>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>


        </div>
    );
}
type  PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitle Rendering")
    return <h1>{props.title}</h1>
}


export default App;
