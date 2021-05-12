import React, { useState, useEffect } from 'react'
import {url_static, url_socket} from '../settings'
import Link, { Redirect } from 'react-router-dom'
import './OS.css'
import './ssh.css'
import '../index.css'

function SSH(props) {

    //document.addEventListener( "DOMContentLoaded",
    setTimeout(function () {
        const socket = new WebSocket(url_socket + `api/os/${props.id}/ssh`);
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
            messageElem.appendChild(document.createTextNode(message));
            document.getElementById('subscribe').appendChild(messageElem);
        }

        /*socket.onclose = function() {
            alert("websocket closing")
            
        }*/
    }, 10);


    return (
        
        <div className='ssh-window'>          
            <div className='input-form message'>
                <input type="text" placeholder='Ваш запрос (например: "uname -a")' id="ssh_command"/>
            </div>
            <div><input className='ssh-btn' type="submit" value="Отправить" id="button_send" /></div>          
            <div id="subscribe" className='ssh_mess'>Messages:</div>
        </div>
    );
}

export default SSH