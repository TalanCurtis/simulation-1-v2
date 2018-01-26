import React, { Component } from 'react';
import './Shelves.css';
import { Link } from 'react-router-dom'

class Shelves extends Component {
    constructor() {
        super();
        this.state = {
            shelves: [{ id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }]
        }
    }
    render() {
        const shelves = this.state.shelves.map((shelf, i) => {
            return (
                <Link className="Link" to={`/Shelf${shelf.id}`} key={i}>
                    <div className='Button'>
                        <h2 >{`Shelf ${shelf.id}`}</h2>
                    </div>
                </Link>
            )
        })
        return (
            <div className="Shelves">
                {shelves}
            </div>
        );
    }
}

export default Shelves;