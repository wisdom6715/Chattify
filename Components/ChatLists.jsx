import style from './chatlists.module.css'
import ChatItem from './ChatItem'
export default function chatlists({setPageSwitch}){
    return <div className={style.ChatlistContainer}>
        <ChatItem setPageSwitch={setPageSwitch}/>
    </div>
}