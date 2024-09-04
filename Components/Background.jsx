import style from './background.module.css'
import ChatTab from './ChatTab'
import Chatroom from './Chatroom'
import Login from './Login'

export default function Background(){
    return <div>
        <div className={style.topContainer}></div>
        <div className={style.chatWindow}>
            <div className={style.chatWindowContainer}>
                <ChatTab />
                <Chatroom />
                
            </div>
            {/* <Login /> */}
        </div>
        
    </div>
}