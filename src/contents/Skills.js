import React, { Component } from 'react';
import Social from '../components/Social';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JavaScript', 'PHP', 'ReactJS', 'mySQL', 'JAVA', 'Bootstrap']
        }
        
    }
    render() {
        return(
            <div className="condiv skills" >
                    <h1 className="subtopic">My Skills & Portfolio</h1>
                    <ul>
                        {this.state.myskills.map((value) => {
                            return <li>
                                - {value}
                            </li>
                        })}
                    </ul>
                        <h2>Github</h2>
                        <h3>PHP</h3>
                        
                            <h4><a href="https://github.com/capricornpp/Register-login-system-PHP"> "Register and Login System" </a></h4>
                            <h4><a href="https://github.com/capricornpp/REST-API-PHP"> "Rest API" </a></h4>
                            <h4><a href="https://github.com/capricornpp/CRUD-system-PHP"> "CRUD System" </a></h4>
                        <h3>ReactJS</h3>
                            <h4><a href="https://github.com/capricornpp/Hospital-System-admit-">  "Inpatient Hospital System"  </a></h4>
                    <Social />
            </div>
        );
    }
}

export default Skills;