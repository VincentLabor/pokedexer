import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <div className="nav pd-1">
                <h1>Pokedex</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar
