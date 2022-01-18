import React,{ useState } from 'react'



export default function TextForm(props) {
    const [text,setText] = useState("Enter text");
    //setText("Hello text");
    const handleUpClick = () =>
     console.log("uppercase");
    return (
        <div>
            <h1>{props.heading}</h1>
             <div className="mb-3">
             <textarea className="form-control" id="myBox" rows="4"></textarea>
            </div>
           <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
        </div>
    )
}
