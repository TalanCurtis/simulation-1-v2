import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import './Detail.css';

class Detail extends Component {
    constructor(){
        super();
        this.state={
            name:"Placeholder",
            price: 999.99
        }
    }
  render() {
    return (
      <div className="Detail">
          Detail
      </div>
    );
  }
}

export default Detail;