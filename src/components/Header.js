import React from 'react'
import logoUH from '../images/unix_logo.png'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'



function Header() {
    
    return(
        <div className ='block-heading'>
            
            <LoginForm/>
            
            <RegisterForm/>

            <div className='heading'>
                <img className='logo' src={logoUH} alt='logo'/>
                <h1>История</h1>
                <h2>Операционной системы</h2>
            </div>     
            
        </div>
    );
}

export default Header