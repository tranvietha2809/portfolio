import React, {Component} from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.js'

class Contacts extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className = "Contacts">
        <ContactForm />
      </div>
    )
  }
}

export default Contacts
