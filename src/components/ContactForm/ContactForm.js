import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    onInputChange = event => {
        const target = event.target;
        const className = target.className;
        this.setState({
            [className] : target.value,
        })
    }

    emailValidation = event =>{
        const email = event.target.value;
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.match(reg)){
            alert("Not a valid email");
            this.setState({
                'email': ''
            })
        }
        event.preventDefault();
    }

    submitForm = () => {
        
    }
    render (){
        return(
            <div className = "contact-form">
                <input type = "text" className = "name"  name = "name" onChange = {this.onInputChange} value = {this.state.name}></input>
                <span style = {this.state.name === ''? {visibility: ''}:{visibility: 'hidden'}}>Please enter your name</span>
                <br/>
                <input type = "text" className = "email" onChange = {this.onInputChange} value = {this.state.email} onBlur = {this.emailValidation}></input>
                <span style = {this.state.email === ''? {visibility: ''}:{visibility: 'hidden'}}>Please enter your email</span>
                <br/>
                <input type = "text" className = "message" onChange = {this.onInputChange} value = {this.state.message}></input>
                <input type = "submit" className = "sendMessage" onSubmit = {this.submitForm}/>
            </div>
        )
    }
}

export default ContactForm;