import style from './chattab.module.css'
import NavigationTab from "./NavigationTab"
import Chatlists from './ChatLists'
import { useState } from 'react'
export default function ChatTab(){
    const[userFilter, setuserFilter]=useState()
    return <div className={style.chatContainer}>
        <NavigationTab />
        <div className={style.chats}>
            <div className={style.header}>
                <h1 className={style.chatHeaderText}>Chats</h1>
                <div className={style.menus}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                </div>
            </div>
            <div className={style.inputContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                <input onChange={(e)=>{
                    setuserFilter(e.target.value)
                }} className={style.chatInput} placeholder='Search.....' value={userFilter} />   
            </div>
            <Chatlists />
        </div>
        {/* chatlists here */}
        
    </div>
}