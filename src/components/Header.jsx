import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <span style={{color:'green'}}>About</span>
                <NavLink activeStyle={{color: 'green'}} to='/school'><span>School</span></NavLink>
                <span>Weather</span>
                <span>Incubator</span>
                <span>News</span>
                <NavLink activeClassName="my-active" to="/contact"><span>Contact</span></NavLink>
                <hr/>
                <h1>{this.props.schoolList}</h1>
            </div>
        );
    }
}

export default Header;
