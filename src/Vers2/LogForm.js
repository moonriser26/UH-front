import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../index.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './actions.js/user'

//Окно авторизации
export default function LogForm () {
  
    //То что вводит пользователь в поля email и password
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const dispatch = useDispatch()
    
    function handleSubmit (e) {
        e.preventDefault()
    }


    
    return(
        
        <div className='block-login'>
            
            <form className='login-form-open' onSubmit={e => handleSubmit(e)}>
                <h1>Авторизация</h1>
                <div className='input-form'>
                    <input 
                        id='email'
                        type='text' 
                        placeholder='Введите Email'
                        onChange={e =>  setEmail(e.target.value)}
                    />

                </div>
                <div className='input-form'>
                    <input 
                        id='password'
                        type='password' 
                        placeholder='Введите пароль'
                        onChange={e => setPass(e.target.value)}
                    />

                </div>
                <div className='input-form'>
                    <input type='submit' value='Войти' onClick={() => dispatch(login(email,pass))} />
                    <Link to='/auth/registration'><p className='reg-input' >Регистрация</p></Link>
                </div>
            </form>
        </div>
    )
}
