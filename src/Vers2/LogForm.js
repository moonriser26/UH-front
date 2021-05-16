import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import '../index.css'
import initAxios from 'axios';
import { getCookie } from './cookie';
import {Link} from 'react-router-dom'

const axios = initAxios.create({
    baseURL: 'api.unix-history.org:4578/',
});

/*const setToken = () => {
    const token = getCookie('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `token ${token}`;
    }
};*/



    // auth
    function register(data) {
      return axios.post('api/user/register/', data);
    }

    function login(data) {
        return axios.post('api/user/login/', data);
      }


//Окно авторизации
export default function LogForm () {
  
    //То что вводит пользователь в поля email и password
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    //Данные для post запроса на бек
    function handleSubmit (e) {
        e.preventDefault()

        const data = {
            login: email,
            password: pass,
        }

        /*axios.post('http://api.unix-history.org:4578/api/user/login/',data)
            .then(res => console.log(res))
            .catch(err => console.log(err))*/

            //Пост запрос на сервер для авторизации
            axios.post('api/user/login/', data, {withCredentials: true})
            .then(res => console.log(res.data))
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
                    <input type='submit' value='Войти'  />
                    <Link to='/auth/registration'>Регистрация</Link>
                </div>
            </form>
        </div>
    )
}
