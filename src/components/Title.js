import React from 'react'
import picture from '../images/picture.jpg'

function Title() {
    return(
        <div className ='block-title'>
            <p className='title'>Title</p>       
            <div>
                <img src={picture} className = 'title-img' alt='unix'></img>
                <p className='subtitle-2'>Title</p>
                <br/>
                <p className='text-2'>
                Дистинкция дискредитирует непредвиденный интеллект, учитывая опасность,
                которую представляли собой писания Дюринга для не окрепшего еще немецкого
                рабочего движения.
                </p>
            </div>
            <p className='text-3'>
            Дистинкция дискредитирует непредвиденный интеллект, учитывая опасность,
            которую представляли собой писания Дюринга для не окрепшего еще немецкого
            рабочего движения.
            </p>
            <footer className='title-footer'>
                <p>
                © Unix History
                </p>
            </footer>
        </div>
         
    );
}

export default Title