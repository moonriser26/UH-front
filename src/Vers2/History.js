import './Home.css'

function History() {
    return(
        <div>
            {/* Навигация сайта */}
            <div className="header">
                <div className="header__nav nav">
                    <a className="nav__link nav__link--active" href="/">Главная страница</a>
                    <a className="nav__link" href="/history">История{/*<Link to='/history'>История</Link>*/}</a>
                    <a className="nav__link" href="/os">Операционные системы{/*<Link to='/os'>Операционные системы</Link>*/}</a>
                    <a className="nav__link nav__link--bordered" href="/auth/login">Войти</a>
                </div>
            </div>
            <h2>History</h2>
        </div>
    )
}

export default History