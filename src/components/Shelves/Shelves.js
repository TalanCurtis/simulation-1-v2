import React, { Component } from 'react';
import './Shelves.css';
import { Link } from 'react-router-dom'
import Bins from '../Bins/Bins'

class Shelves extends Component {
    constructor() {
        super();
        this.state = {
            shelves: [
                { id: 'A', bin:[{ id: 1, isEmpty: true }, { id: 2, isEmpty: true }, { id: 3, isEmpty: false }, { id: 4, isEmpty: true }, { id: 5, isEmpty: false }],},
                { id: 'B', bin:[{ id: 11, isEmpty: true }, { id: 21, isEmpty: true }, { id: 31, isEmpty: false }, { id: 41, isEmpty: true }, { id: 51, isEmpty: false }]},
                { id: 'C', bin:[{ id: 12, isEmpty: true }, { id: 22, isEmpty: true }, { id: 32, isEmpty: false }, { id: 42, isEmpty: true }, { id: 52, isEmpty: false }] }, 
                { id: 'D', bin:[{ id: 13, isEmpty: true }, { id: 23, isEmpty: true }, { id: 33, isEmpty: false }, { id: 43, isEmpty: true }, { id: 53, isEmpty: false }] }
            ]
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