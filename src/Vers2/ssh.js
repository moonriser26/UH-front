import React, { useState, useEffect } from 'react'
import {url_static, url_socket} from '../settings'

function SSH() {


    const [text, setText] = useState('')

    const URL = url_static + '/api/os/list/'

    useEffect(() => {
        fetch(URL)
            .then(respons => respons.json())
            .then(result => {
                //console.log(result[0]["html_text"])
                setText(result[0]["html_text"])
            })
    }, [])

   /* document.addEventListener( "DOMContentLoaded",function () {
        const socket = new WebSocket(url_socket + '/api/os/5/ssh')
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
            alert(incomingMessage);
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
            <form name="publish">
                <div><input type="text" className="message"/></div>
                <div><input type="button" value="Отправить" id="button_send"/></div>
            </form>
            <div id="subscribe"></div>
        </div>
    );
}

export default SSH