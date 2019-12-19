import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuStatus: 'menu-close'
        }
    }
    
    handleClick = e => {
        if (this.state.menuStatus === "menu-close") {
            this.setState({ menuStatus: "menu-open" });
        } else {
            this.setState({ menuStatus: "menu-close" });
        }
    };

    render() {
        return (
            <header>
        <nav className='nav'>
            <div className='link-wrap'>
            <h1>
            <Link to="/" className="links">Clothing Store</Link>
            </h1>
            <ul>
            <li><Link to="/about" className="links">About</Link></li>
            <li><Link to="/contact" className="links">Contact</Link></li>
            <li><Link to="/cart" className="links">Cart</Link></li>
            <li><Link to="/register" className="links">Register</Link></li>
            </ul>
            <img
            className="nav_button"
            src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
            alt="ham_menu"
            onClick={this.handleClick}
            />
            </div>
        </nav>
        <menu id='menu' className={this.state.menuStatus}>
            <h1 className='menu-list'><Link to="/about" className="links">About</Link></h1>
            <h1 className='menu-list'><Link to="/contact" className="links">Contact</Link></h1>
            <h1 className='menu-list'><Link to="/cart" className="links">Cart</Link></h1>
            <h1 className='menu-list'><Link to="/register" className="links">Register</Link></h1>
        </menu>
    </header>
    )
    }
}