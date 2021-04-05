import './OS.css'
import screen from '../images/screen.png'


//Страница с ОС

function OS() {
    return(
        <div>
            {/*Навигация */}
            <div className="header">
                <div className="header__nav nav">
                    <a className="nav__link" href="/">Главная страница</a>
                    <a className="nav__link" href="/history">История{/*<Link to='/history'>История</Link>*/}</a>
                    <a className="nav__link nav__link--active" href="/os">Операционные системы{/*<Link to='/os'>Операционные системы</Link>*/}</a>
                    <a className="nav__link nav__link--bordered" href="/auth/login">Войти</a>
                </div>
            </div>

            <div className='os-content'>
                {/*Список ОС */}
                <div className='os-list'>
                    
                    <div className='os'>
                        <p>UNIX</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>

                    <div className='os'>
                        <p>Solaris</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>

                    <div className='os'>
                        <p>Linux</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>
                    
                    <div className='os'>
                        <p>OpenBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>

                    <div className='os'>
                        <p>FreeBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>

                    <div className='os'>
                        <p>Linux</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button>SSH</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default OS