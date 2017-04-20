import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" >
                        <NavLink to="/">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li role="presentation" >
                        <NavLink activeClassName="active" to="/about">
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink activeClassName="active" to='/school'>
                            <span>School</span>
                        </NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink activeClassName="active" to="/weather">
                            <span>Weather</span>
                        </NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink activeClassName="active" to="/incubator">
                            <span>Incubator</span>
                        </NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink activeClassName="active" to="/news">
                            <span>News</span>
                        </NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink activeClassName="active" to="/contact">
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
