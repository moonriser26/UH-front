import './Auth.css'
import React from 'react'
import LogForm from './LogForm'

//Страница авторизации.

function Auth() {
    return(
        //Навигация сайта
        <div>
        <div className="header">
                <div className="header__nav nav">
                <a className="nav__link nav__link" href="/">Главная страница</a>
                <a className="nav__link" href="/history">История{/*<Link to='/history'>История</Link>*/}</a>
                <a className="nav__link" href="/os">Операционные системы{/*<Link to='/os'>Операционные системы</Link>*/}</a>
                <a className="nav__link nav__link--active" href="/auth/login">Войти</a>
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