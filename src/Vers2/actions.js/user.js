import axios from 'axios'
import {url_static} from '../../settings'
import { setToken, setUser } from '../reducers.js/userReducer'
import cookie from 'js-cookie';
import { getCookie, setCookie } from '../cookie';
import Cookies from 'js-cookie';

const URL1 = url_static + 'api/user/register/'
const URL2 = url_static + 'api/user/login/'



export const registration = async (username,password) => {
    try {
        const response = await axios.post(URL1, {
            username,
            password
        })
        alert(response.data.message)
    } catch(e) {
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
            alert(e)
        }
    }
    
}

