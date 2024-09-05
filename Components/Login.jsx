import { Profiler, useState } from 'react'
import style from './login.module.css'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const [storedInfo, setStoredInfo]=useState({})
    const [userInfo, setuserInfo]= useState({name:"", password:""})
    const navigate = useNavigate();
    const handleSubmit = (e) =>(
        e.preventDefault(),
        setStoredInfo(userInfo),
        setuserInfo({name:'', password:''}),
        navigate('/chats')
    )
    return <div className={style.generalConatiner}>
        <form className={style.loginContainer} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className={style.InputContainer}>
                <input onChange={(e)=>{
                    setuserInfo({...userInfo, name:e.target.value})
                }}  value={userInfo.name} placeholder='Enter Username' required/>
                <input onChange={(e)=>{
                    setuserInfo({...userInfo, password:e.target.value})
                }} value={userInfo.password} placeholder='Enter Password' required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
}