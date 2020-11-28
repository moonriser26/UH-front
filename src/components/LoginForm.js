import React, { useEffect, useState } from 'react'

function LoginForm () {
    const [form_log, setForm_log] = useState({
        email:'', password: ''
    })
    const [isOpenL,setIsOpenL] = useState(false)
    const [nameForm,setNameForm] = useState('login-form')
    const nameHandler = isOpenL  => {
        if (isOpenL)
            setNameForm('login-form-open')
        else
            setNameForm('login-form')
    }
    function submitHandler(event) {
        event.preventDefault()
        if(isOpenL)
            setForm_log('','')
    }

    useEffect(() => {
        console.log('State change', isOpenL)
        nameHandler(isOpenL)
    },[isOpenL])
    
    useEffect(() => {
        console.log('Form change, email: ', form_log.email,', password: ',form_log.password)
    },[form_log])

    return(
        <div className='block-login'>
            <button 
            className='button-login' 
            onClick={() => setIsOpenL(!isOpenL)}  
            >
            Вход
            </button>
            <form className={nameForm}>
                <h1>Авторизация</h1>
                <div className='input-form'>
                    <input 
                        id='email'
                        type='text' 
                        placeholder='Введите Email'
                        onChange={(event) => setForm_log({ ...form_log, email: event.target.value })}
                    />

                </div>
                <div className='input-form'>
                    <input 
                        id='password'
                        type='password' 
                        placeholder='Введите пароль'
                        onChange={(event) => setForm_log({ ...form_log, password: event.target.value })}
                    />

                </div>
                <div className='input-form'>
                    <input type='submit' value='Войти' onSubmit={submitHandler}/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm