import React, { useEffect, useState } from 'react'

export default function RegisterForm() {

    const[form_reg,setForm_reg] = useState({
        email:'', password: '',repeat_password:''
    })

    const [isOpenR,setIsOpenR] = useState(false)

    const [nameForm,setNameForm] = useState('login-form')

    const nameHandler = isOpenR  => {
        if (isOpenR)
            setNameForm('login-form-open')
        else
            setNameForm('login-form')
    }

    function submitHandler(event) {
        event.preventDefault()
        if(isOpenR)
            setForm_reg('','')
    }

    useEffect(() => {
        console.log('State change', isOpenR)
        nameHandler(isOpenR)
    },[isOpenR])
    
    useEffect(() => {
        console.log('Form change, email: ', form_reg.email,', password: ',form_reg.password,', repeat: ',form_reg.repeat_password)
    },[form_reg])


    return (
        <div className='block-register'>
            <button 
                className='button-register'
                onClick={() => setIsOpenR(!isOpenR)} 
            >
            Регистрация
            </button> 
            <form className={nameForm}>
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
                        id='password'
                        type='password' 
                        placeholder='Повторите пароль'
                        onChange={(event) => setForm_reg({ ...form_reg, repeat_password: event.target.value })}
                    />
                </div>
                <div className='input-form'>
                    <input type='submit' value='Зарегистрироваться' onSubmit={submitHandler}/>
                </div>
            </form>
        </div>
    )
}

