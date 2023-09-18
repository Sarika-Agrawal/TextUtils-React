import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('');  // Hooks--> text is a state variable
    // text = "dfgh";   // Wrong way to change the state
    // setText("dfgh");   // Correct way to change the state

    const handleUpClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase!', 'success')
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase!', 'success')
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert('Clear your text!', 'success')
    }

    const handleToggleCaseClick = ()=>{
        let newText = "";
        for(let i=0; i<text.length; i++){
            if(i%2 === 0){
                newText += text[i].toUpperCase()
            }
            else{
                newText+= text[i].toLowerCase();
            }
        }
        setText(newText)
        props.showAlert('Converted to alternating text!', 'success')
    }

    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied your text!', 'success')
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Removed extra spaces!', 'success')
    }

    const handleOnChange = (event)=>{
        // console.log('On change');
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-info mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-info mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-info mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-outline-info mx-1" onClick={handleToggleCaseClick}>Convert to aLtErNaTiNg CaSe</button>
            <button className="btn btn-outline-info mx-1" onClick={handleCopyClick}>Copy text</button>
            <button className="btn btn-outline-info mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
  )
}