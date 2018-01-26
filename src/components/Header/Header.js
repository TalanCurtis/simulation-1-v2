import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo.png';

class Header extends Component {
    constructor(){
        super();
        this.state={
            pageTitle:"Shelfie",
            binTitle:"Bin A"
        }
    }
  render() {
    return (
      <div className="Header">
        <Link to='/'><img className='Logo' src={Logo} alt='' height='50'></img></Link>
        <h1>{this.state.pageTitle}</h1>
        <h1>{this.state.binTitle}</h1>
      </div>
    );
  }
}

export default Header;