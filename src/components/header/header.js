import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './header.css';

const Header = () => {
    return (
        <div className="navbar">
            <Nav>
                <NavItem>
                    <NavLink href="#">All picture</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Favorite</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Header;