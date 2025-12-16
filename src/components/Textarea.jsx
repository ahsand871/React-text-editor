import React,{useState} from 'react'

export default function TextForm(props) {
    const [showToast, setErrorShowToast] = useState(false);
    const [copied, setCopied] = useState(false);


    const handleUppercase = () => {
        let newText = props.text.toUpperCase();
        props.setText(newText);
    }
    const handleLowercase = () =>{
        let newText = props.text.toLowerCase();
        props.setText(newText);
    }
    const handleClear = ()=>{
        props.setText('');
    }


    const handleCopy = () => {
        if(props.text.trim() == ""){
            setErrorShowToast(true);

            setTimeout(() => setErrorShowToast(false), 1000);
            return; 
        } else{
            navigator.clipboard.writeText(props.text);
            setCopied(true);

            setTimeout(() => setCopied(false), 1000);
            
        }
    }
    const handleSentenceCase = () => {
        let newText = props.text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
            return c.toUpperCase();
        });
        props.setText(newText);
    }
    const handleDemoText = () =>{
        let demoText= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in tenetur voluptates ex excepturi rem. Possimus vel repellendus maiores labore iusto et expedita, distinctio, nemo sapiente omnis, atque ea deleniti blanditiis vero maxime! Quasi dolores corrupti, officia deserunt magnam voluptatum autem sequi eligendi aliquam fugit repudiandae dicta illum dolorem cupiditate?';
        let newText = `${props.text}${demoText}`;
        props.setText(newText);
    }
    const handleOnChange = (event) => {
        props.setText(event.target.value);
    }
  return (
    <div>
        <div className="textArea">
        <h1 className='textAreaHeading'>Enter text below to analyze :</h1>
            <div className="mb-3 me-2">
             <textarea className="form-control me-2" value={props.text} style={props.isDark? {color : '#fff'} : {color : '#121212'}} placeholder='Enter Text Here!' onChange={handleOnChange} id="textBox" rows="10"></textarea>
            </div>
            <h4 className='textAreaHeading'>Options:</h4>
            <div className={props.isDark? "btn-container btn-container-dark" : 'btn-container btn-container-light'}>
                <button className='btn btn-primary' onClick={handleUppercase}>Convert to Uppercase</button>
                <button className='btn btn-secondary' onClick={handleLowercase}>Convert to Lowercase</button>
                <button className="btn btn-warning" onClick={handleSentenceCase}>Convert to Sentence Case</button>
                <button className="btn btn-info" onClick={handleDemoText}>Add Demo text</button>
                <button className={`btn ${copied ? "btn-success" : "btn-success"}`} onClick={handleCopy}> {copied ? "Copied ✓" : "Copy to Clipboard"}</button>  
                <button className='btn btn-danger' onClick={handleClear}>Clear</button>
            
            </div>

            {showToast && (
                <div className="toast show custom-toast position-fixed top-0 end-0 m-3">
                    <div className="toast-body bg-danger text-white rounded">
                    ❌ Textarea is empty.
                    </div>
                </div>
                )}
           
            </div>
       </div>  
  )
}


