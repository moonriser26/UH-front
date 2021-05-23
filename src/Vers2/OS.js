import React from 'react'
import './OS.css'
import SSH from './ssh'
import {Link,Route} from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'
import {url_static} from '../settings'
import {is_autorizated} from '../utils'
import { useSelector } from 'react-redux';





//Страница с ОС

function OS() {
    const isAuth = useSelector(state => state.user.isAuth)

    const URL = url_static + 'api/os/list/'

    const [modalActive,setModalActive] = useState(false)
    const [sshActive,setSshActive] = useState(false)
    const [osName,setOsName] = useState('UNIX')
    const [id_os,setId_os] = useState('1')
    const [text, setText] = useState(null)
    const [ssh_enable,setSsh_enable] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [vendor,setVendor] = useState('')
    const [version,setVersion] = useState('')
    //const [dev_date,setDev_date] = useState('')
    
   
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
        window.ssh_active = true
        setOsName(os_data[num]['name'])
        setId_os(os_data[num]['id'])
        setText(os_data[num]['html_text'])
        setSsh_enable(os_data[num]['ssh_enable'])
        setPhoto(os_data[num]['photos']['path'])
        
    }

    function disable_ssh() {
        setSshActive(false);
        window.ssh_active = false

    }

    function enable_ssh() {
        setSshActive(true);
        window.ssh_active = true

    }
    
    function os_click(num) {
        setModalActive(true)
        setOsName(os_data[num]['name'])
        setId_os(os_data[num]['id'])
        setText(os_data[num]['html_text'])
        setSsh_enable(os_data[num]['ssh_enable'])
        setPhoto(os_data[num]['photos']['path'])
        setVendor(os_data[num]['vendor'])
        setVersion(os_data[num]['version'])
        //setDev_date(os_data[num][''])
    }
    //Отображение списка всех ОС
    const ListOs = []
   
    function tableOS() {
        for (let i=0; i<os_data.length; i++)
        {
            ListOs.push(
                <div className='os' key={i} onClick={() => os_click(i)}>
                    <p>{os_data[i]['name']}</p>
                    <img src={os_data[i]['photos']['path']} alt='screen'></img>
                    <br/>
                    {
                        os_data[i]['ssh_enable'] && is_autorizated() ?
                            <button onClick={() => clickHandler(i)}>Попробовать</button>
                            : <button style={{visibility: 'hidden'}}>Попробовать</button>
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
                        <Link className="nav__link nav__link--active" to="/os">Операционные системы</Link>
                        <Link to='/commands' className="nav__link">Справочник</Link>
                        {isAuth && <Link className="nav__link nav__link--bordered" to="/auth/login">Войти</Link>}
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
                            <div className='cont'>
                                <img className='os_wind' src={photo} alt='window'></img>
                                <div className="os_textBox">
                                    <h4>Разработчик: {vendor}</h4>
                                    <h4>Актуальная версия: {version}</h4>
                                </div>
                                <div className='os_text'>{text}</div>
                            </div>
                            <br/>
                            {
                                ssh_enable && is_autorizated() ?
                                <button className='button_start' onClick={() => enable_ssh()}>Попробовать</button>
                                :
                                <div></div>
                            }
                            
                        </div>                       
                        :
                        <div>
                            {
                                !modalActive ?
                                disable_ssh()
                                :
                                <div>
                                    <h2>{osName}</h2>                                                   
                                    <div className='ssh_content'>
                                        
                                        <SSH id={id_os} active={modalActive} sshActive={sshActive}/>
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