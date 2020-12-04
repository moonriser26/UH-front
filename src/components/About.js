import React, {useEffect,useState} from 'react'


function About() {

    const [infoLinux,setInfoLinux] = useState('')
    const [infoSolaris,setInfoSolaris] = useState('')
    const [infoOpenBSD,setInfoOpenBSD] = useState('')
    const [infoFreeBSD, setInfoFreeBSD] = useState('')
    const URL = 'http://unix-history.org:4578/api/os/list/'
    
    useEffect(() =>  { 
        fetch(URL)
        .then(respons => respons.json())
        .then(result => {
            setInfoSolaris(result[1]["html_text"])
            setInfoLinux(result[2]["html_text"])
            setInfoOpenBSD(result[3]["html_text"])
            setInfoFreeBSD(result[4]["html_text"])
        })
    },[])

    return(

        <div className ='block-about'> 
            <p className='title'>С ЧЕГО БЫ НАЧАТЬ?</p>
            <p className='subtitle'>Семейство Unix</p>
            <p className='text'>
                <h4>Solaris</h4>
                {infoSolaris}
            </p>
            <p className='text'>
            <h4 >Linux</h4>
                {infoLinux}
            </p>
            <p className='text'>
            <h4>OpenBSD</h4>
                {infoOpenBSD}
            </p>
            <p className='text'>
                <h4>FreeBSD</h4>
                    {infoFreeBSD}
                </p>
                
            </div>

    )
}


export default About