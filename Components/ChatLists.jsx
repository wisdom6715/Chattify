import style from './chatlists.module.css'
import ChatItem from './ChatItem'
export default function chatlists(){
    return <div className={style.ChatlistContainer}>
        <ChatItem />
        <ChatItem />

    </div>
}