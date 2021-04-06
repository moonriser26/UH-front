import './OS.css'
import screen from '../images/screen.png'
import window from '../images/window.png'
import SSH from './ssh'
import {Link,Redirect,Route} from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'


//Страница с ОС

function OS() {

    const [modalActive,setModalActive] = useState(false)
    const [osName,setOsName] = useState('UNIX')
    const [id_os,setId_os] = useState('1')
    
    function clickHandler(id) {
        setModalActive(true)
        switch(id) {
            case 2: setOsName('Solaris');setId_os('2');break;
            case 3: setOsName('Linux');setId_os('3');break;
            case 4: setOsName('OpenBSD');setId_os('4');break;
            case 5: setOsName('FreeBSD');setId_os('5'); break;
            default: setOsName('UNIX');
        }

    }
    

    return(
        <div>
            {/*Навигация */}
            <div className="header">
                <div className="header__nav nav">
                    <Route>
                        <Link className="nav__link" to="/">Главная страница</Link>
                        {/*<Link className="nav__link" to="/history">История</Link>*/}
                        <Link className="nav__link nav__link--active" to="/os">Операционные системы</Link>
                        <Link className="nav__link nav__link--bordered" to="/auth/login">Войти</Link>
                    </Route>
                </div>
            </div>

            {/*Всплывашка ОС */}
            <div className='os-content'>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className='os_modal'>
                            <h2>{osName}</h2>                                                   
                            <p><img src={window} alt='window'></img>Text</p>
                            <br/>
                            <SSH id={id_os}/>                     
                    </div>
                </Modal>

                {/*Список ОС */}
                <div className='os-list'>
                    
                    <div className='os'>
                        <p>UNIX</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(1)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>Solaris</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(2)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>Linux</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(3)}>Выбрать</button>
                    </div>
                    
                    <div className='os'>
                        <p>OpenBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(4)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>FreeBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        
                        <button onClick={() => clickHandler(5)}>Выбрать</button>                       
                    </div>
               
                </div>
            </div>
        
        </div>
    )
}

export default OS