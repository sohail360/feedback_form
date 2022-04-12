import React, { useState } from 'react';
import "./App.css"
import RightBox from "./components/RightBox.jsx";
import LeftBox from "./components/LeftBox.jsx";


const App = () => {

    const [feedBack,setfeedBack]=useState([]);
    
    return (
        <>
        <h1>FEEDBACK</h1>
        <div className="section">
            <LeftBox setfeedBack={setfeedBack}/>
            <RightBox feedBack={feedBack}/>
            </div>
        </>
    )

};
export default App;