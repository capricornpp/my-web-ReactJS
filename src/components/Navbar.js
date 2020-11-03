import React, { Component } from 'react';
import Navitems from './Navitems';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive' : item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Navitems className="nav-items" item="Home" tolink="/" activenav={this.activeitem}> </Navitems></li>
                    <li> <Navitems className="nav-items" item="About" tolink="/about" activenav={this.activeitem}> </Navitems></li>
                    <li> <Navitems className="nav-items" item="Education" tolink="/education" activenav={this.activeitem}> </Navitems></li>
                    <li><Navitems className="nav-items" item="Skills and Portfolio" tolink="/skills" activenav={this.activeitem}> </Navitems></li>
                    <li> <Navitems className="nav-items" item="Contact" tolink="/contact" activenav={this.activeitem}> </Navitems></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;