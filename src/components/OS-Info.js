import React, { useState, useEffect } from 'react'
import picture from '../images/picture.jpg'
import PropTypes from 'prop-types';

function Info(id) {

    const [text,setText] = useState('')
    const osName = ['Unix','Solaris','Linux','OpenBSD']
      
    const URL = 'http://unix-history.org:4578/api/os/list/'

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