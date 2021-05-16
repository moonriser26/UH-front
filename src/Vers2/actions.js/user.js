import axios from 'axios'
import {url_static} from '../../settings'
import { setToken, setUser } from '../reducers.js/userReducer'
import cookie from 'js-cookie';
import { getCookie, setCookie } from '../cookie';
import Cookies from 'js-cookie';

const URL1 = url_static + 'api/user/'
const URL2 = url_static + 'api/user/login/'
axios.defaults.xsrfHeaderName = "X-CSRFToken";


export const registration = async (username,password1,password2) => {
    /*const data = JSON.stringify({
        username,
        password1,
        password2 
    })*/
    try {
        const response = await axios(URL1, {
            method:'post',
            data: {
                username,
                password1,
                password2 
            },
            withCredentials:true,
            headers:{"Content-Type" : "application/json"}  
        })
       // const response = await axios.post(URL1, data)
        alert('OK')
    } catch(e) {
        console.log(e.response)
        alert(e)
    }
}

export const login = (username,password) => {
    return async dispatch => {
        try {
            const response = await axios(URL2, {
                method: 'post',
                data: {
                    username,
                    password
                },
                withCredentials:true,
                
            })
            const token = response.data.key;
            dispatch(setToken(token))
            
            setCookie('token',token)          
            
            console.log(token)
            
        } catch(e) {
            alert(e.response.data)
            console.log(e.response.data)
        }
    }
    
}

