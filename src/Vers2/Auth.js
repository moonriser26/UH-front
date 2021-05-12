import './Auth.css'
import React from 'react'
import LogForm from './LogForm'
import {Link,Route} from 'react-router-dom'
import { useSelector } from 'react-redux';


//Страница авторизации.

function Auth() {
    const isAuth = useSelector(state => state.user.isAuth)

    return(
        //Навигация сайта
        <div>
        <div className="header">
                <div className="header__nav nav">
                <Route>
                    <Link className="nav__link" to="/">Главная страница</Link>
                    {/*<Link className="nav__link" to="/history">История</Link>*/}
                    <Link className="nav__link " to="/os">Операционные системы</Link>
                    {!isAuth && <Link className="nav__link nav__link--active" to="/auth/login">Войти</Link>}
                </Route>
                </div>
        </div>

        {/*Форма входа*/}
        <div className="main">
            <div className="main__text-block">
                 <LogForm/>           
            </div>
        </div>
    </div>
    )
}

export default Auth