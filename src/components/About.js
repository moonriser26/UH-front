import React, {useEffect,useState} from 'react'

function About() {

    const [infoLinux,setInfoLinux] = useState('')
    const [infoSolaris,setInfoSolaris] = useState('')
    const [infoOpenBDS,setInfoOpenBDS] = useState('')
      
      const URL = 'http://unix-history.org:4578/api/os/list/'

        useEffect(() =>  { 
            fetch(URL)
            .then(respons => respons.json())
            .then(result => {
                setInfoSolaris(result[1]["html_text"])
                setInfoLinux(result[2]["html_text"])
                setInfoOpenBDS(result[3]["html_text"])
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
            <h4>OpenBDS</h4>
                {infoOpenBDS}
            </p>
            <p className='text'>
                <h4>Title</h4>
                Дистинкция дискредитирует непредвиденный интеллект, учитывая опасность,
                которую представляли собой писания Дюринга для не окрепшего еще немецкого
                рабочего движения.
            </p>
            
        </div>
    );
}

export default About