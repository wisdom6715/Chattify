import style from './chatitem.module.css'
import { useState, useEffect } from 'react';
export default function ChatItem({setPageSwitch}){
    const [userInfo, setUserInfo] = useState({ name: "", password: "" });

    useEffect(() => {
        // Load stored user info from localStorage
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
            console.log('Loaded user info from localStorage:', JSON.parse(storedUserInfo));
        }
    }, []);
    function handleClick(){
        setPageSwitch(false);
        console.log('userInfo');
    }
    return <div className={style.chatItem} onClick={handleClick}>
        <div className={style.profilePhoto}></div>
        <div className={style.Info} >
            <h3>{userInfo.name} {userInfo.password}</h3>
            <p>Message sent</p>
        </div>
    </div>
}