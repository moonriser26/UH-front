import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
=======
import picture from '../images/picture.jpg'
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882
import {url_static, url_socket} from '../settings'
import './OS.css'
import './ssh.css'
import '../index.css'
import {sshMess} from './sshMess'

function SSH(props) {

<<<<<<< HEAD
<<<<<<< HEAD:src/components/ssh.js

    const [text, setText] = useState('')

<<<<<<< HEAD
    const URL = url_static + '/api/os/list/'
=======
    const URL = url_static + 'api/os/list/'
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882

    useEffect(() => {
        fetch(URL)
            .then(respons => respons.json())
            .then(result => {
                //console.log(result[0]["html_text"])
                setText(result[0]["html_text"])
            })
    }, [])

<<<<<<< HEAD
   /* document.addEventListener( "DOMContentLoaded",function () {
        const socket = new WebSocket(url_socket + '/api/os/5/ssh')
=======
    document.addEventListener( "DOMContentLoaded",function () {
        const socket = new WebSocket(url_socket + 'api/os/5/ssh')
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882
=======
    /*document.addEventListener( "DOMContentLoaded",function () {
        const socket = new WebSocket(url_socket + `/api/os/${props.id}/ssh`)
>>>>>>> dev2:src/Vers2/ssh.js
=======
    //document.addEventListener( "DOMContentLoaded",
    setTimeout(function () {
        const socket = new WebSocket(url_socket + `api/os/${props.id}/ssh`);
>>>>>>> develop
        // socket.onmessage = function (ev)
        // отправить сообщение из формы publish
        socket.onopen = function(e) {
        document.getElementById("button_send").onclick = function () {
            let outgoingMessage = document.getElementById("ssh_command").value + '\n';
            
            socket.send(outgoingMessage);
            return false
        };
        }

// обработчик входящих сообщений
        socket.onmessage = function (event) {
            var incomingMessage = event.data;
            console.log(incomingMessage);
            showMessage(incomingMessage);
            return false
        };

// показать сообщение в div#subscribe
        function showMessage(message) {
            let messageElem = document.createElement('div');
            messageElem.innerHTML = message
            //console.log(message)
           // messageElem.appendChild(document.createTextNode(message));
            document.getElementById('subscribe').appendChild(messageElem)
            document.getElementById('subscribe').lastChild.scrollIntoView(false)
        }

        if (!props.active) {
            socket.close()
        }
<<<<<<< HEAD:src/components/ssh.js
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> dev2:src/Vers2/ssh.js
    })*/
=======
    })
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882
=======
        
    }, 10);
>>>>>>> develop

    function handleKeyPress(e){
        var key=e.keyCode || e.which;
         if (key === 13) {
            document.getElementById('button_send').click()
            document.getElementById("ssh_command").value = ""
         }
       }

    return (
<<<<<<< HEAD:src/components/ssh.js
        <div>
            <form name="publish">
<<<<<<< HEAD
                <div><input type="text" className="message"/></div>
=======
                <div><input type="text" name="message"/></div>
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882
                <div><input type="button" value="Отправить" id="button_send"/></div>
            </form>
            <div id="subscribe"></div>
=======
        
        <div className='ssh-window'>          
            <div className='input-form message'>
                <input type="text" placeholder='Ваш запрос (например: "uname -a")' id="ssh_command" onKeyPress={e => handleKeyPress(e)}/>
            </div>
            <div><input className='ssh-btn' type="submit" value="Отправить" id="button_send" /></div>          
<<<<<<< HEAD
            <div id="subscribe" className='ssh_mess'>Messages:</div>
>>>>>>> dev2:src/Vers2/ssh.js
=======
            <div id="subscribe" className='ssh_mess'></div>
>>>>>>> develop
        </div>
    );
}

export default SSH