import style from './background.module.css';
import ChatTab from './ChatTab';
import Chatroom from './Chatroom';
import ChatCover from './ChatCover';
import { useContext, useState } from 'react';
import { authContext } from './Login'; // Import the context from Login

export default function Chatwindow() {
    const [pageSwitch, setPageSwitch] = useState(true);
    
    // Consuming the context properly
    const user = useContext(authContext);
    
    console.log("Current User in Chatwindow: ", user); // Debugging info

    if (!user) {
        return <div>Loading user info...</div>;
    }

    return (
        <div>
            <div className={style.topContainer}></div>
            <div className={style.chatWindow}>
                <div className={style.chatWindowContainer}>
                    <ChatTab setPageSwitch={setPageSwitch} />
                    {pageSwitch ? <ChatCover /> : <Chatroom />}
                </div>
            </div>
        </div>
    );
}
