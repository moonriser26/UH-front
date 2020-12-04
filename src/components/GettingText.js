import React from 'react'

export default class GettingText extends Comment {
    constructor(props) {
        super(props)
        this.state = {
            id:-1,
            text: '',
        }
    }
    componentDiDMount() { 
        fetch("http://unix-history.org:4578/api/os/list/")
        .then(respons => respons.json())
        .then(result => {
            this.setState({
                id: result.id,
                text: result.html_text
            })      
        })
    }
    render() {
        const {id,text} = this.state
        return(
            <p className="text-2" key={id}>
                {text}
            </p>
        )
    }
  }