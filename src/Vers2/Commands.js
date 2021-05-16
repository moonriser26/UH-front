import React from 'react'
import { useSelector } from 'react-redux'
import './Commands.css'

function Commands() {
    const isAuth = useSelector(state => state.user.isAuth)

    return(
        <div>
             <div className="header">
                    <div className="header__nav nav">
                    <Route>
                        <Link to="/"><p className="nav__link nav__link--active">Главная страница</p></Link>
                        <Link to="/os"><p className="nav__link ">Операционные системы</p></Link>
                        {!isAuth && <Link to="/auth/login"><p className="nav__link nav__link--bordered">Войти</p></Link>}
                        {isAuth && <div className='nav__link' onClick={() =>dispatch(logout())}>Выйти</div>}
                    </Route>
                    </div>
                </div>
            <div className='command_window'>
                
            </div>
        </div>
    )
}