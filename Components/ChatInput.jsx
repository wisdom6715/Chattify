import { useState } from 'react'
import style from './chatinput.module.css'
export default function ChatInput(){
    const [message, sendMessage]= useState()
    function handleSubmit(e){
        e.preventDefault()
    }
    return <div className={style.inputConatiner}>
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
        <form className={style.messageInputContainer} onSubmit={handleSubmit}>
            <input onChange={(e)=>{
                sendMessage(e.target.value)
            }} className={style.messageInput} placeholder='Type message..' value={message}/>
            <svg type='submit' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
        </form>
    </div>
}