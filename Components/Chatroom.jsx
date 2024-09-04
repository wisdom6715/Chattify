import style from './chatroom.module.css'
import ChatProfile from './ChatProfile'
import ChatSpace from './ChatSpace'
import ChatInput from './ChatInput'
export default function Chatroom(){
    return <div className={style.chatRoom}>
        <ChatProfile />
        <ChatSpace />
        <ChatInput />
    </div>
}