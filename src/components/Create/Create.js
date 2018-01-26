import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Create.css';

class Create extends Component {
    constructor(){
        super();
        this.state={
            name:"Placeholder",
            price: 999.99
        }
    }
  render() {
    return (
      <div className="Create">
          Create
      </div>
    );
  }
}

export default Create;