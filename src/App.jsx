import { useState } from "react"
import Logo from "../Components/Logo"
import Background from "../Components/Background"

function App() {
  const [visible, setInvisible] = useState(true)
  function LogoDisplay(){
    setTimeout(()=>{
      setInvisible(false)
    }, 4000)
    console.log(visible);
    
  }
  LogoDisplay()
  return (
    <div>
      {/* Logo will only display for 2secs of opening the app */}
      {visible?<Logo />:''}
      <Background />
    </div>
  )
}


export default App
