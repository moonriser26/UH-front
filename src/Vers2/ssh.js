import React, { useState, useEffect } from 'react'
import {url_static, url_socket} from '../settings'
import './OS.css'
import './ssh.css'
import '../index.css'
import {sshMess} from './sshMess'

function SSH(props) {

    //document.addEventListener( "DOMContentLoaded",
    setTimeout(function () {
        const socket = new WebSocket(url_socket + `api/os/${props.id}/ssh`);
        // socket.onmessage = function (ev)
        // отправить сообщение из формы publish
        socket.onopen = function(e) {
            document.getElementById("button_send").onclick = function () {
                if (isActive()) {
                    let outgoingMessage = document.getElementById("ssh_command").value + '\n';

                    socket.send(outgoingMessage);
                }
                return false;
            };
        }

// обработчик входящих сообщений
        socket.onmessage = function (event) {
            if (isActive()) {
                var incomingMessage = event.data;
                console.log(incomingMessage);
                showMessage(incomingMessage);
            }
            return false
        };

// показать сообщение в div#subscribe
        function showMessage(message) {
            if (isActive()) {
                let messageElem = document.createElement('div');
                messageElem.innerHTML = message
                //console.log(message)
                // messageElem.appendChild(document.createTextNode(message));
                document.getElementById('subscribe').appendChild(messageElem)
                document.getElementById('subscribe').lastChild.scrollIntoView(false)
            }
        }

        function isActive() {
            if (!window.ssh_active) {
                socket.close(3001)
            }
            return window.ssh_active
        }

        
    }, 10);

    function handleKeyPress(e){
        var key=e.keyCode || e.which;
         if (key === 13) {
            document.getElementById('button_send').click()
            document.getElementById("ssh_command").value = ""
         }
       }

    return (
        
        <div className='ssh-window'>          
            <div className='input-form message'>
                <input type="text" placeholder='Ваш запрос (например: "uname -a")' id="ssh_command" onKeyPress={e => handleKeyPress(e)}/>
            </div>
            <div><input className='ssh-btn' type="submit" value="Отправить" id="button_send" /></div>          
            <div id="subscribe" className='ssh_mess'></div>
        </div>
    );
}

export default SSH