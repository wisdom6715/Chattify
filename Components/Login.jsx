import { useState, createContext, useEffect } from 'react';
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import Chatwindow from './Chatwindow';

export const authContext = createContext(null);

export default function Login() {
    const [storedInfo, setStoredInfo] = useState({});
    const [userInfo, setUserInfo] = useState({ name: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Store user info as a JSON string in localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Clear form data
        setUserInfo({ name: '', password: '' });

        // Navigate to the chat window
        navigate('/chats');
    };

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
            console.log('Loaded user info from localStorage:', storedUserInfo);
        }
    }, []);
    return (
        <authContext.Provider value={storedInfo}>
            <div className={style.generalConatiner}>
                <form className={style.loginContainer} onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className={style.InputContainer}>
                        <input 
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}  
                            value={userInfo.name} 
                            placeholder='Enter Username' 
                            required 
                        />
                        <input 
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} 
                            value={userInfo.password} 
                            placeholder='Enter Password' 
                            required 
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                {/* <div className={style.Chatwindow}>
                    Ensure Chatwindow is rendered here
                    <Chatwindow />
                </div> */}
            </div>
        </authContext.Provider>
    ); 
}
