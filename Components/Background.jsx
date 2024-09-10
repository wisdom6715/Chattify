import style from './background.module.css'
import Login from './Login'

export default function Background(){

    return <div>
        <div className={style.topContainer}></div>
        <div className={style.chatWindow}>
            <Login />
        </div>
        
    </div>
}