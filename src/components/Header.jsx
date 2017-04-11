import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (

            <div>
                <span>MEST</span>
                <br/>
                <nav>
                    <Link to="/"><span>Home</span></Link>
                    <span>About</span>
                    <NavLink activeStyle={{color: 'green'}} to='/school'><span>School</span></NavLink>
                    <span>Incubator</span>
                    <span>News</span>
                    <NavLink activeClassName="my-active" to="/contact"><span>Contact</span></NavLink>
                </nav>
            </div>
        );
    }
}

export default Header;
