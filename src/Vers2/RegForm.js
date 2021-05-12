import React, { useEffect, useState } from 'react'
import '../index.css'
import { registration } from './actions.js/user'

//Окно регистрации
function RegForm() {

    //Данные для пост запроса 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleSubmit (e) {
        e.preventDefault()
    }

    return (
        <div className='block-register'>
            
            <form className='login-form-open' onSubmit={e => handleSubmit(e)}>
                <h1>Регистрация</h1>
                <div className='input-form'>
                    <input 
                        id='email'
                        type='text'
                        value={email}
                        placeholder='Введите Email'
                        onChange={(event) => setEmail(event.target.value)}
                        
                    />

                </div>
                <div className='input-form'>
                    <input 
                        id='password'
                        type='password' 
                        value={password}
                        placeholder='Введите пароль'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
               
                <div className='input-form'>
                    <input type='submit' value='Регистрация' onClick ={() => registration(email,password)}/>
                </div>
            </form>
        </div>
    )
}

export default RegForm