import React, { useState, useEffect } from 'react'
import picture from '../images/picture.jpg'
import PropTypes from 'prop-types';
import url_static from "../settings";

function Info(id) {

    const [text,setText] = useState('')
    const osName = ['Unix','Solaris','Linux','OpenBSD']
      
<<<<<<< HEAD
    const URL = url_static + '/api/os/list/'
=======
    const URL = url_static + 'api/os/list/'
>>>>>>> 6fd9b5708c9d6d91dd1330e384e40e6e12131882

    useEffect(() =>  { 
        fetch(URL)
        .then(respons => respons.json())
        .then(result => {
            console.log(id['id'])
            setText(result[id['id']]["html_text"])
        })
    },[])

    return(
        <div className ='block-title'>
            <p className='title'>{osName[id['id']]}</p>       
            <div className='unix-text'>
                <img src={picture} className = 'title-img' alt='unix'></img>
                <p className='subtitle-2'></p>
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

Info.propTypes = {
    id: PropTypes.number
}
export default Info