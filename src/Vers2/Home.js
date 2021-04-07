import React from 'react'
import './Home.css'
import logo from '../images/logo.png'
import {Link,Route} from 'react-router-dom'



function Home() {

    return(
        <div>
            <div>
                {/*Навигация*/}
                <div className="header">
                    <div className="header__nav nav">
                    <Route>
                        <Link className="nav__link nav__link--active" to="/">Главная страница</Link>
                        {/*<Link className="nav__link" to="/history">История</Link>*/}
                        <Link className="nav__link " to="/os">Операционные системы</Link>
                        <Link className="nav__link nav__link--bordered" to="/auth/login">Войти</Link>
                    </Route>
                    </div>
                </div>
                {/*Главная страница*/}
                <div className="main">
                    <div className="main__text-block">
                    <h1 className="main__heading">Linux</h1>
                    <p className="main__text">UNIX - Великое семейство операционных систем, с самой лучшей историей в мире, и мы хотим показать, что они могут, мы даём доступ к демонстрационным образцам части систем (так как они добавляются вручную)</p>
                    </div>
                    <img className="main__img" src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home
