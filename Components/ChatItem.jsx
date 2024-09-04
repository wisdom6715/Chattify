import style from './chatitem.module.css'
export default function ChatItem(){
    return <div className={style.chatItem}>
        <div className={style.profilePhoto}></div>
        <div className={style.Info}>
            <h3>Username</h3>
            <p>Message sent</p>
        </div>
    </div>
}