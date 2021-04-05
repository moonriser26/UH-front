import React from 'react'
import './Home.css'
import logo from '../images/logo.png'
//import {Link} from 'react-router-dom'


function Home() {

    return(
        <div>
            <div>
                {/*Навигация*/}
                <div className="header">
                    <div className="header__nav nav">
                    <a 
                        className="nav__link nav__link--active" 
                        href="/"
                        >Главная страница
                    </a>
                    <a 
                        className="nav__link" 
                        href="/history"
                        >История
                    </a>
                    <a 
                        className="nav__link" 
                        href="/os"
                        >Операционные системы
                    </a>
                    <a 
                        className="nav__link nav__link--bordered" 
                        href="/auth/login"
                        >Войти</a>
                    </div>
                </div>
                {/*Главная страница*/}
                <div className="main">
                    <div className="main__text-block">
                    <h1 className="main__heading">Title</h1>
                    <p className="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <img className="main__img" src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home
