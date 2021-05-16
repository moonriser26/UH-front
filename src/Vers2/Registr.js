import './Auth.css'
import React from 'react'
import RegForm from './RegForm'
import LogForm from './LogForm'
import {Link,Route} from 'react-router-dom'


//Страница регистрации
function Registr() {
    return(
        <div>
            {/*Навигация */}
            <div className="header">
                    <div className="header__nav nav">
                        <Route>
                            <Link className="nav__link " to="/">Главная страница</Link>
                            {/*<Link className="nav__link" to="/history">История</Link>*/}
                            <Link className="nav__link " to="/os">Операционные системы</Link>
                            <Link to='/commands'><p className="nav__link ">Справочник</p></Link>
                            <Link className="nav__link nav__link--active" to="/auth/login">Войти</Link>
                        </Route>
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