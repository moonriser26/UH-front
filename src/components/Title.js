import React, { useState, useEffect } from 'react'
import picture from '../images/picture.jpg'
import url_static from '../settings'

function Title() {


      const [text,setText] = useState('')
      
<<<<<<< HEAD
      const URL = url_static + '/api/os/list/'
=======
      const URL = url_static + 'api/os/list/'
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882

        useEffect(() =>  { 
            fetch(URL)
            .then(respons => respons.json())
            .then(result => {
                //console.log(result[0]["html_text"])
                setText(result[0]["html_text"])
            })
        },[])

        /*Не работает
        function getText(url) {
            const headers = {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : URL,
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Methods' : 'GET,POST',
            }

            return (
                fetch(url, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: headers,
                }).then(response => response.json())
                .then(res => {
                    setText(res[0]["html_text"])
                })
            )
        }*/

    return(
        <div className ='block-title'>
            <p className='title'>Немного истории</p>       
            <div className='unix-text'>
                <img src={picture} className = 'title-img' alt='unix'></img>
                <p className='subtitle-2'>Unix</p>
                <br/>
                <p className="text-2" > 
                   {text}
                </p>
            </div>
            <footer className='title-footer'>
                <p >
                © Unix History
                </p>
            </footer>
        </div>
         
    );
}

export default Title