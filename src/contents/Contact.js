import React, { Component } from 'react';

import Social from '../components/Social';


class Contact extends Component {
    render() {
        return(
            <div className="condiv contact">
                <h1 className="subtopic"> Contact Me</h1>
                <h4>Email : phakphum.phinyodom@gmail.com</h4>
                <h4>Line ID : capricorn.pp</h4>
                <h4>Tel : 083-7206072</h4>

                <Social />
            </div>
        );
    }
}

export default Contact;