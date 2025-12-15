import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/Textarea.jsx';
import Summary from './components/SummaryCont.jsx';
import './App.css';

function App() {
    const [text, setText] = useState("");
    const [isDark, setIsDark] = useState(true);
    const handleToggle = () =>{
          if(isDark){
              setIsDark(!isDark);
          }else{
              setIsDark(true)
          }
      }

  return (
    <>
    <div className={isDark? "main-app-dark" : 'main-app-light'} >
      <Navbar writerName='Guest writer' isDark={isDark} setIsDark={setIsDark} handleToggle={handleToggle} />
        <div className="components">
          <TextForm text={text} setText={setText} isDark={isDark} setIsDark={setIsDark}/>
          <Summary text={text} isDark={isDark} setIsDark={setIsDark}/>
        </div>
      </div>
    </>
  )
}

export default App