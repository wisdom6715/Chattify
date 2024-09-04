import { useState } from 'react'
import style from './login.module.css'
export default function Login(){
    const [userInfo, setuserInfo]= useState({name:"", password:""})
    const handleSubmit = (e) =>(
        e.preventDefault(),
        setuserInfo("")
    )
    return <div className={style.generalConatiner}>
        <form className={style.loginContainer} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className={style.InputContainer}>
                <input onChange={(e)=>{
                    setuserInfo(e.target.value)
                }}  value={userInfo.name} placeholder='Enter Username'/>
                <input onChange={(e)=>{
                    setuserInfo(e.target.value)
                }} value={userInfo.password} placeholder='Enter Password'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
}