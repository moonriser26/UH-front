import './Home.css'
import {Link,Route} from 'react-router-dom'

function History() {
    return(
        <div>
            {/* Навигация сайта */}
            <div className="header">
                <div className="header__nav nav">
                <Route>
                    <Link className="nav__link" to="/">Главная страница</Link>
                    <Link className="nav__link nav__link--active" to="/history">История</Link>
                    <Link className="nav__link " to="/os">Операционные системы</Link>
                    <Link className="nav__link nav__link--bordered" to="/auth/login">Войти</Link>
                </Route>
                </div>
            </div>
            <h2>History</h2>
        </div>
    )
}

export default History