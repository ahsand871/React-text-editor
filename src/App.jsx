import { useState } from 'react';
import { useEffect } from "react";
import Navbar from './components/Navbar.jsx';
import TextForm from './components/Textarea.jsx';
import Summary from './components/SummaryCont.jsx';
import Alert from './components/Alert.jsx';
import './App.css';

function App() {
    const [text, setText] = useState("");
    const [theme, setTheme] = useState("light");
    const [alert, setAlert] = useState(null);
    const handleToggle = () =>{
          if(theme === 'dark'){
              setTheme('light');
              showAlert('Dark Mode has been enabled!', 'warning');

          }else{
              setTheme('dark');
              showAlert('Light Mode has been enabled!', 'success');
          }
      }
    
      const showAlert =(message, type) =>{
        setAlert({
          msg: message,
          type : type
        })

        setTimeout(() => {
          setAlert(null);
        }, 2000);

      }

      const handleSmileTheme = () => {
        setTheme('custom1');
        showAlert('Smile theme enabled!', 'info');
            
        // setInterval(() => {
        //         document.title='Install Now';
        //       }, 1500);
        //       setInterval(() => {
        //         document.title='Join Us Now';
        //       }, 2000);
        // to set title dynamically
      };

      const handleHeartTheme = () => {
        setTheme('custom2');
        showAlert('Heart theme enabled!', 'info');
      };

      const handleFireTheme = () => {
        setTheme('custom3');
        showAlert('Fire theme enabled!', 'info');
      };
        useEffect(() => {
          const setVh = () => {
            // 1vh ka 1% of actual window.innerHeight
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
          };

          setVh();
          window.addEventListener('resize', setVh);

          return () => window.removeEventListener('resize', setVh);
        }, []);


  return (
    <div className={ 
              theme === 'custom1' ? 'main-app-smile' :
              theme === 'custom2' ? 'main-app-heart' :
              theme === 'custom3'? 'main-app-fire':
              theme === 'light'? "main-app-dark" : 'main-app-light'} >
      <Navbar theme={theme}  handleToggle={handleToggle} showAlert={showAlert} handleSmileTheme={handleSmileTheme} handleHeartTheme={handleHeartTheme} handleFireTheme={handleFireTheme} />
      <Alert alert={alert} />
        <div className="components">
          <TextForm text={text} setText={setText} theme={theme} showAlert={showAlert}  />
          <Summary text={text} theme={theme} />
        </div>
      </div>
  )
}

export default App