import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import NavbarButton from './NavbarButton.js'
import Home from '../../views/Home/Home.js'
import About from '../../views/About/About.js'
import Contacts from '../../views/Contacts/Contacts.js'
import Portfolio from '../../views/Portfolio/Portfolio.js'
import './Navbar.css'
import './Navbarbranding.css'
class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      Navbar: {
        width: '0%',
      },
      NavbarButton:{
        color: 'black'
      }
    }
  }

  showNavBar = () => {
    if (this.state.Navbar.width === '0%'){
      this.setState({
        Navbar: {
          width: '50%',
        },
        NavbarButton : {
          color: 'white'
        }
      })
    } else{
      this.setState({
        Navbar: {
          width: '0%',
        },
        NavbarButton: {
          color: 'black'
        }
      })
    }
  }

  render(){
    return(
      <div>
        <div className="Navbarbranding" style ={{width: this.state.Navbar.width}}>
          <div className = "portrait"></div>
        </div>
        <div className ="Navbar" style ={{width : this.state.Navbar.width}}>
          <NavLink exact to="/" onClick = {this.showNavBar}>Home</NavLink>
          <NavLink exact to="/about" onClick = {this.showNavBar}>About</NavLink>
          <NavLink exact to="/portfolio" onClick = {this.showNavBar}>Portfolio</NavLink>
          <NavLink exact to="/contacts" onClick = {this.showNavBar}>Contacts</NavLink>
        </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contacts" component={Contacts} />
        	</div>
        <NavbarButton style = {{color: this.state.NavbarButton.color}} showNavBar={this.showNavBar}/>
      </div>
    )
  }
};


export default Navbar;
