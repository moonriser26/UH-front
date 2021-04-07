import React from 'react'
import './OS.css'
import screen from '../images/screen.png'
import window from '../images/window.png'
import SSH from './ssh'
import {Link,Redirect,Route} from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'
import {url_static} from '../settings'
import {is_autorizated} from '../utils'


//Страница с ОС

function OS() {

    const URL = url_static + '/api/os/list/'

    const [modalActive,setModalActive] = useState(false)
    const [sshActive,setSshActive] = useState(false)
    const [osName,setOsName] = useState('UNIX')
    const [id_os,setId_os] = useState('1')
    const [text, setText] = useState('')
    const [ssh_enable,setSsh_enable] = useState(false)
    /*
     fetch(URL)
            .then(respons => respons.json())
            .then(result => {
                //console.log(result[0]["html_text"])
                setText(result[0]["html_text"])
            })
    */
    
    function clickHandler(id,number) {
        setModalActive(true)
        switch(id) {
            case 2: setOsName('Solaris');setId_os('2');break;
            case 3: setOsName('Linux');setId_os('3');break;
            case 4: setOsName('OpenBSD');setId_os('4');break;
            case 5: setOsName('FreeBSD');setId_os('5'); break;
            default: setOsName('UNIX');
        }
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                //console.log(res[number]['html_text'])
                setText(res[number]['html_text'])
                setSsh_enable(res[number]['ssh_enable'])
            })
         
    }
    

    return(
        <div className='os-main'>
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
                        {!sshActive ?
                        <div className='ccc'>
                            <h2>{osName}</h2>                                                   
                            <div className='cont'><img className='os_wind' src={window} alt='window'></img>{text}</div>
                            <br/>
                            {
                                ssh_enable && is_autorizated() ?
                                <button onClick={() => setSshActive(true)}>Подключиться по SSH</button>
                                :
                                <p></p>
                            }
                            
                        </div>                       
                        :
                        <div>
                            {
                                !modalActive ?
                                setSshActive(false)
                                :
                                <div>
                                    <h2>{osName}</h2>                                                   
                                    <p className='ssh_content'>
                                        <img className='ssh_wind' src={window} alt='window'></img>
                                        <SSH id={id_os}/>
                                    </p>
                                    
                                    
                                </div>
                                
                            }
                            
                        </div>
                        }
                                                
                    </div>
                </Modal>

                {/*Список ОС */}
                <div className='os-list'>
                    
                    <div className='os'>
                        <p>UNIX</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(1,4)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>Solaris</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(2,1)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>Linux</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(3,0)}>Выбрать</button>
                    </div>
                    
                    <div className='os'>
                        <p>OpenBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        <button onClick={() => clickHandler(4,2)}>Выбрать</button>
                    </div>

                    <div className='os'>
                        <p>FreeBSD</p>
                        <img src={screen} alt='screen'></img>
                        <br/>
                        
                        <button onClick={() => clickHandler(5,3)}>Выбрать</button>                       
                    </div>
               
                </div>
            </div>
        
        </div>
    )
}

export default OS