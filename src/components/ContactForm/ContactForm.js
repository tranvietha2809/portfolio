import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            mesasge: "",
        }
    }

    onInputChange(event){
        const target = event.target;
        const className = target.className;
        this.setState({
            [className] : target.value,
        }, alert(console.log(this.state)))
    }
    render (){
        return(
            <div className = "contact-form">
                <input type = "text" className = "name" onChange = {() => this.onInputChange}></input>
                <input type = "text" className = "email"></input>
                <input type = "text" className = "message"></input>
            </div>
        )
    }
}

export default ContactForm;