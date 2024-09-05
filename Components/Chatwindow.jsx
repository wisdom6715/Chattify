import style from './background.module.css'
import ChatTab from './ChatTab'
import Chatroom from './Chatroom'
import ChatCover from './ChatCover'

export default function Chatwindow(){

    return <div>
        <div className={style.topContainer}></div>
        <div className={style.chatWindow}>
            <div className={style.chatWindowContainer}>
                <ChatTab/>
                {/* <Chatroom /> */}
                <ChatCover />
            </div>
        </div>
        
    </div>
}