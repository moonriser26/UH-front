import React from 'react'
import './OS.css'
import screen from '../images/screen.png'
import window from '../images/window.png'
import SSH from './ssh'
import {Link,Route} from 'react-router-dom'
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
   
    const [os_data,setOs_data] = useState([])
    const [res_act,setRes_act] = useState(true)
    if (res_act) {
        fetch(URL)
        .then(response => response.json())
        .then(res => {
            setOs_data(res)
        })
        setRes_act(false)
    }
    
    
    function clickHandler(num) {
        setModalActive(true)
        setSshActive(true)
        setOsName(os_data[num]['name'])
        setId_os(os_data[num]['id'])
        setText(os_data[num]['html_text'])
        setSsh_enable(os_data[num]['ssh_enable'])        
    }
    
    function os_click(num) {
        setModalActive(true)
        setOsName(os_data[num]['name'])
        setId_os(os_data[num]['id'])
        setText(os_data[num]['html_text'])
        setSsh_enable(os_data[num]['ssh_enable'])
        
            
    }
    //Отображение списка всех ОС
    const ListOs = []
   
    function tableOS() {
        for (let i=0; i<os_data.length; i++)
        {
            ListOs.push(
                <div className='os' key={i} onClick={() => os_click(i)}>
                    <p>{os_data[i]['name']}</p>
                    <img src={screen} alt='screen'></img>
                    <br/>
                    {
                        ssh_enable && is_autorizated() ?
                        <button onClick={() => clickHandler(i)}>SSH</button>
                        : <button disabled>SSH</button>
                    }
                                                
                </div> 
            )
        }
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
                                <div></div>
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
                                    <div className='ssh_content'>
                                        <img className='ssh_wind' src={window} alt='window'></img>
                                        <SSH id={id_os}/>
                                    </div>                                                                      
                                </div>                             
                            }
                            
                        </div>
                        }
                                                
                    </div>
                </Modal>

                {/*Список ОС */}
                <div className='os-list'>                    
                    
                    {tableOS()}
                    <div>{ListOs}</div>             
                </div>
            </div>
        
        </div>
    )
}

export default OS