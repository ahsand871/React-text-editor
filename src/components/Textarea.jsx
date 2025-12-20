import React,{useState} from 'react';

export default function TextForm(props) {
    const [copied, setCopied] = useState(false);

    const checkEmpty =()=>{
        if(props.text.trim() === ''){
            props.showAlert('TextBox is Empty', "info");
            return true;
        }
        return false;
    }
    const handleUppercase = () => {
        if (checkEmpty()) return;
        
        let newText = props.text.toUpperCase();
        props.setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleLowercase = () =>{
        if (checkEmpty()) return;
        
        let newText = props.text.toLowerCase();
        props.setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    const handleClear = ()=>{
        if (checkEmpty()) return;

            props.setText('');
            props.showAlert("Textbox Cleared!",'info')
              
    }


    const handleCopy = () => {
        if (checkEmpty()) return;

            navigator.clipboard.writeText(props.text);
            setCopied(true);

            props.showAlert('Copied to Clipboard', 'success');
            setTimeout(() => setCopied(false), 1000);
            
        
    }
    const handleSentenceCase = () => {
        if (checkEmpty()) return;

        let newText = props.text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
            return c.toUpperCase();
        });
        props.setText(newText);
        props.showAlert("Converted to SentenceCase!", "success");
    }
    const handleDemoText = () =>{
        let demoText= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in tenetur voluptates ex excepturi rem. Possimus vel repellendus maiores labore iusto et expedita, distinctio, nemo sapiente omnis, atque ea deleniti blanditiis vero maxime! Quasi dolores corrupti, officia deserunt magnam voluptatum autem sequi eligendi aliquam fugit repudiandae dicta illum dolorem cupiditate?';
        let newText = `${props.text}${demoText}`;
        props.setText(newText);
        props.showAlert('Added Demo Text',"primary")
    }
    const handleOnChange = (event) => {
        props.setText(event.target.value);
    }
  return (
    <div>
        <div className="textArea">
        <h1 className='textAreaHeading'>Enter text below to analyze :</h1>
            <div className="mb-3 me-2">
             <textarea className="form-control me-2" value={props.text} style={props.theme === 'dark'? {color:"#121212"} : {color : "#fff"}} placeholder='Enter Text Here!' onChange={handleOnChange} id="textBox" rows="10"></textarea>
            </div>
            <h4 className='textAreaHeading'>Options:</h4>
            <div className={`btn-container btn-container-${["light", "custom3"].includes(props.theme) ? "dark" : "light"}`}>
                <button className='btn btn-primary' onClick={handleUppercase}>Convert to Uppercase</button>
                <button className='btn btn-secondary' onClick={handleLowercase}>Convert to Lowercase</button>
                <button className="btn btn-warning" onClick={handleSentenceCase}>Convert to Sentence Case</button>
                <button className="btn btn-info" onClick={handleDemoText}>Add Demo text</button>
                <button className={`btn ${copied ? "btn-success" : "btn-success"}`} onClick={handleCopy}> {copied ? "Copied ✓" : "Copy to Clipboard"}</button>  
                <button className='btn btn-danger' onClick={handleClear}>Clear</button>
            
            </div>

           
            </div>
       </div>  
  )
}


