import './Auth.css'
import React from 'react'
import RegForm from './RegForm'
import LogForm from './LogForm'


//Страница регистрации
function Registr() {
    return(
        <div>
            {/*Навигация */}
            <div className="header">
                    <div className="header__nav nav">
                    <a className="nav__link nav__link" href="/">Главная страница</a>
                    <a className="nav__link" href="/history">История{/*<Link to='/history'>История</Link>*/}</a>
                    <a className="nav__link" href="/os">Операционные системы{/*<Link to='/os'>Операционные системы</Link>*/}</a>
                    <a className="nav__link nav__link--active" href="/auth/login">Войти</a>
                    </div>
            </div>

            {/*Окно регистрации*/}
            <div className="main">
                <div className="main__text-block">
                    <RegForm/>
                </div>
            </div>
        
        </div>
    )
}

export default Registr