import { useState } from 'react';
import style from './background.module.css';
import ChatTab from './ChatTab';
import Chatroom from './Chatroom';
import ChatCover from './ChatCover';

export default function Chatwindow() {
    const [pageSwitch, setPageSwitch] = useState(true);
    

    return (
        <div>
            <div className={style.topContainer}>
                {/* Example usage of userInfo */}
                {/* <p>Welcome, {userInfo.name}!</p> */}
            </div>
            <div className={style.chatWindow}>
                <div className={style.chatWindowContainer}>
                    <ChatTab setPageSwitch={setPageSwitch} />
                    {pageSwitch ? <ChatCover /> : <Chatroom />}
                </div>
            </div>
        </div>
    );
}
