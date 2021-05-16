import React from 'react'
import './Home.css'
import logo from '../images/logo.png'
import {Link,Route} from 'react-router-dom'
import {url_static} from '../settings'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './reducers.js/userReducer'


function Home() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                {/*Навигация*/}
                <div className="header">
                    <div className="header__nav nav">
                    <Route>
                        <Link to="/"><p className="nav__link nav__link--active">Главная страница</p></Link>
                        <Link to="/os"><p className="nav__link ">Операционные системы</p></Link>
                        <Link to='/commands'><p className="nav__link ">Справочник</p></Link>
                        {!isAuth && <Link to="/auth/login"><p className="nav__link nav__link--bordered">Войти</p></Link>}
                        {isAuth && <div className='nav__link' onClick={() =>dispatch(logout())}>Выйти</div>}
                    </Route>
                    </div>
                </div>
                {/*Главная страница*/}
                <div className="main">
                    <div className="main__text-block">
                        <h1 className="main__heading">Unix history</h1>
                        <p className="main__text">UNIX - Великое семейство операционных систем, с самой лучшей историей в мире, и мы хотим показать, что они могут, мы даём доступ к демонстрационным образцам части систем (так как они добавляются вручную)</p>
                        <center><Link to='/os'><span className="main__button">Перейти к системам</span></Link></center>
                        
                        
                    </div>
                    <img className="main__img" src={logo} alt="Logo"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
