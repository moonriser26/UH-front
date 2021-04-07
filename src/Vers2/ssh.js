import React, { useState, useEffect } from 'react'
import {url_static, url_socket} from '../settings'
import Link, { Redirect } from 'react-router-dom'
import './OS.css'
import './ssh.css'
import '../index.css'

function SSH(props) {

    /*document.addEventListener( "DOMContentLoaded",function () {
        const socket = new WebSocket(url_socket + `/api/os/${props.id}/ssh`)
        // socket.onmessage = function (ev)
        // отправить сообщение из формы publish
        document.getElementById("button_send").onclick = function () {
            var outgoingMessage = document.getElementById("button_send").value;
            
            socket.send(outgoingMessage);
            return false;
        };

// обработчик входящих сообщений
        socket.onmessage = function (event) {
            var incomingMessage = event.data;
            //alert(incomingMessage);
            showMessage(incomingMessage);
        };

// показать сообщение в div#subscribe
        function showMessage(message) {
            var messageElem = document.createElement('div');
            messageElem.appendChild(document.createTextNode(message));
            document.getElementById('subscribe').appendChild(messageElem);
        }

    })*/


    return (
        
        <div>          
            <div className='input-form message'>
                <input type="text" placeholder='Ваш запрос'/>
            </div>
            <div><input className='ssh-btn' type="submit" value="Отправить" id="button_send" /></div>          
            <div id="subscribe" className='ssh_mess'>Messages:</div>
        </div>
    );
}

export default SSH