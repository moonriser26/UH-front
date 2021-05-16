import React, { useEffect, useState } from 'react'
import '../index.css'

//Окно регистрации
function RegForm() {

    //Данные для пост запроса 
    const[form_reg,setForm_reg] = useState({
        email:'', 
        password: '',
        repeat_password:''
    })

    /*useEffect(() => {
        console.log('Form change, email: ', form_reg.email,', password: ',form_reg.password,', repeat: ',form_reg.repeat_password)
    },[form_reg])*/


    return (
        <div className='block-register'>
            
            <form className='login-form-open'>
                <h1>Регистрация</h1>
                <div className='input-form'>
                    <input 
                        id='email'
                        type='text' 
                        placeholder='Введите Email'
                        onChange={(event) => setForm_reg({ ...form_reg, email: event.target.value })}
                    />

                </div>
                <div className='input-form'>
                    <input 
                        id='password'
                        type='password' 
                        placeholder='Введите пароль'
                        onChange={(event) => setForm_reg({ ...form_reg, password: event.target.value })}
                    />
                </div>
                <div className='input-form'>
                    <input 
                        id='repeat password'
                        type='password' 
                        placeholder='Повторите пароль'
                        onChange={(event) => setForm_reg({ ...form_reg, repeat_password: event.target.value })}
                    />
                </div>
                <div className='input-form'>
                    <input type='submit' value='Зарегистрироваться' />
                </div>
            </form>
        </div>
    )
}

export default RegForm