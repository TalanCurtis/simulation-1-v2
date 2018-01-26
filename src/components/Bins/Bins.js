import React, { Component } from 'react';
import './Bins.css';
import { Link } from 'react-router-dom'

class Bins extends Component {
    constructor() {
        super();
        this.state = {
            bins: [{ id: 1, isEmpty: true }, { id: 2, isEmpty: true }, { id: 3, isEmpty: false }, { id: 4, isEmpty: true }, { id: 5 }]
        }
    }
    render() {
        const bins = this.state.bins.map((bin, i) => {
            if (bin.isEmpty) {
                return (
                    <div key={i} className='EmptyButton'>
                        <h2 >+ Add inventory to bin</h2>
                    </div>
                )
            } else {
                return (
                     <Link className="Link" to={`/bin/${bin.id}`} key={i}>
                        <div className='Button'>
                            <h2 >{`Bin ${bin.id}`}</h2>
                        </div>
                    </Link>
                )
            }
        })
        return (
            <div className="Bins">
                {bins}
            </div>
        );
    }
}

export default Bins;