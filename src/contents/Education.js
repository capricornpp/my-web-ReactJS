import React, { Component } from 'react';
import Social from '../components/Social';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv eduction">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Computer Engineering" where="Suranaree University of Technology" from="2015" to="2019"/>
                <Widecard title="High School" where="KaengKhro-wittaya School" from="2015" to="2012"/>
                <Social />
            </div>
       
        );
    }
}

export default Education;