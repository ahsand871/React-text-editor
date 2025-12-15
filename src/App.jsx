import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/Textarea.jsx';
import Summary from './components/SummaryCont.jsx';
import './App.css';

function App() {
   const [text, setText] = useState("");

  return (
    <>
      <Navbar writerName='Guest writer'/>
        <div className="component-app">
          <TextForm text={text} setText={setText} />
          <Summary text={text} />
        </div>
    </>
  )
}

export default App