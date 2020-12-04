import React, { useState, useEffect } from 'react'
import picture from '../images/picture.jpg'


function Title() {


      const [text,setText] = useState('err')
      const uerr = "http://jsonplaceholder.typicode.com/todos?_limit=5"
      const URL = 'http://unix-history.org:4578/api/os/list/'

       /* useEffect(() =>  { 
            fetch(uerr)
            .then(respons => respons.json())
            .then(result => {
                console.log(result[0]["title"])
                //setText(result[0]["title"])
            })
        },[])*/

        function getText(url) {
            const headers = {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : 'http://unix-history.org:4578/api/os/list/',
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Methods' : 'GET,POST',
            }

            return fetch(url, {
                method: 'GET',
                mode: 'no-cors',
                headers: headers,
            }).then(response => {
                response.json()
            }).then(res => {
                setText(res[0]["html_text"])
            }).catch(err => {
                "ss"
            })
        }

    return(
        <div className ='block-title'>
            <p className='title'>Немного о UNIX</p>       
            <div>
                <img src={picture} className = 'title-img' alt='unix'></img>
                <p className='subtitle-2'>Title</p>
                <br/>
                <p className="text-2" onChange={getText(URL)}>
                   {text}
                </p>
            </div>
            <p className='text-3'>
            Дистинкция дискредитирует непредвиденный интеллект, учитывая опасность,
            которую представляли собой писания Дюринга для не окрепшего еще немецкого
            рабочего движения.
            </p>
            <footer className='title-footer'>
                <p >
                © Unix History
                </p>
            </footer>
        </div>
         
    );
}

export default Title