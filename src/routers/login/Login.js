import React, { useRef } from 'react'
import "./Login.css"
import axios from '../../api'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {NavLink} from "react-router-dom"
import {LOG_IN} from "../../content1/action/actionType"
import {useDispatch} from "react-redux"

function Login() {
    const username = useRef()
    const password = useRef()
    const dispatch = useDispatch()

    const signIn = e => {
        e.preventDefault()
        let user = {
            username: username.current.value,
            password: password.current.value,
        }
        axios.post("/users/sign-in", user)
            .then(res => {
                // console.log(res);
                dispatch({type:LOG_IN,payload:res.data.innerData})
                toast.success(res.data.msg)
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response.data.msg)
            })
          

    }

    return (
        <div className="container">
            <div className='login'>
            <form onSubmit={signIn} action="">
                <h3>Login</h3>
                <input ref={username} placeholder='Username' type="text" />
                <input ref={password} placeholder='password' type="text" />
                <input type="submit" value={"Sign in"} />
                <NavLink to="/">
                <button className='login__home'>Asosiy</button>
                </NavLink>
            </form>
            <ToastContainer/>
        </div>
        </div>
      
    )
}

export default Login