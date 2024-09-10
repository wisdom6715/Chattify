import style from './chatitem.module.css'
import { useContext} from 'react';
import { authContext } from './Login';

export default function ChatItem({setPageSwitch}){
    const userInfo = useContext(authContext);
    function handleClick(){
        setPageSwitch(false);
        console.log(userInfo);
    }
    return <div className={style.chatItem} onClick={handleClick}>
        <div className={style.profilePhoto}></div>
        <div className={style.Info} >
            <h3>{userInfo?.name}</h3>
            <p>Message sent</p>
        </div>
    </div>
}