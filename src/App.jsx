import { useState } from "react"
import Logo from "../Components/Logo"
import { useNavigate } from 'react-router-dom';

function App() {
  const [visible, setInvisible] = useState(true)
  const navigate = useNavigate();
  function LogoDisplay(){
    setTimeout(()=>{
      setInvisible(false)
    }, 4000)
    console.log(visible);
    // Navigate to the chat window
    navigate('/login');
  }
  LogoDisplay()
  return (
    <div>
      {visible?<Logo />:''}
    </div>
  )
}


export default App
