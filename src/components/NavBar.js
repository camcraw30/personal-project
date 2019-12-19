import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
        <div>
            <div className="navbar-container">

            <div className="navbar-links-container">
                <ul className="navbar-links">
                <li onClick={() => this.props.navigate('clothing store')}>Clothing Store</li>
                <li onClick={() => this.props.navigate('about')}>About</li>
                <li onClick={() => this.props.navigate('contact')}>Contact</li>
                <li onClick={() => this.props.navigate('cart')}>Cart</li>
                </ul>
            </div>
            </div>
            <hr />
        </div>
        );
    }
}

export default NavBar;