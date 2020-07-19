import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'favorite', label: 'Понравилось' }
        ]
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const classButton = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${classButton}`}
                    onClick={() => this.props.onFilterSelect(name)}>{label}</button>
            )
        });

        return (
            <div className="navbar" >
                <Navbar light expand="md">
                    <NavbarBrand href="/">App for Newton</NavbarBrand>
                    {buttons}

                </Navbar>

            </div>
        )
    }
}