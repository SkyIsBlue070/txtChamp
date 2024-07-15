import React, {useState} from 'react';

export default function TextForm(props) {

        const [text, setText] = useState("");

        const handleUppClick =()=>{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case!","success");
        }

        const handleLowClick =()=>{
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case!","success");
        }

        const handleClrTxt =()=>{
            let newText='';
            setText(newText);
            props.showAlert("Text Has Been Cleared!","success");
        }

        const capitalizeWords = (input) => {
            let words = input.split(' ');
            words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            return words.join(' ');
        };

        const handleCapitalizeClick = () => {
            let capitalizedText = capitalizeWords(text);
            setText(capitalizedText);
            props.showAlert("Capitalized!","success");
        };

        const handleOnChange =(event)=>{
            setText(event.target.value);
        }

return (
    <>
        <div className="container">
        <h1 style={{backgroundColor:props.mode==='dark'?'#26282A':'white',color:props.mode==='dark'?'white':'#26282A'}}>{props.Heading}</h1>

        <div className="mb-3">
        <textarea type="text" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#191C27':'white',color:props.mode==='dark'?'white':'#191C27'}} id="myBox" rows={12}/>
        </div>

        <div className='buttons my-3 mb-3'>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleUppClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleCapitalizeClick}>Capitalize Words</button>
        </div>

        <div className="clear my-3 mb-3">
        <button disabled={text.length===0} type="button" className="btn btn-danger" onClick={handleClrTxt}>Clear Text!</button> 
        </div>

        <div className="container mb-3">
            <h2 style={{backgroundColor:props.mode==='dark'?'#26282A':'white',color:props.mode==='dark'?'white':'#26282A'}}>Text Summary :</h2>
            <p>Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        </div>

        </div>
        </>
)
}

