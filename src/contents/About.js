import React, { Component } from 'react';
import Social from '../components/Social';
import profilepic1 from '../img/profile1.jpg';
import profilepic2 from '../img/profile2.jpg';
import profilepic3 from '../img/profile3.jpg';

import ReactTypingEffect from 'react-typing-effect';

class About extends Component {
    render() {
        return (
             <div className="condiv about">
                 <h1 className="subtopic"> About Me</h1>
                 <img src={profilepic1} alt="profile" className="profilepic" />
                 <img src={profilepic2} alt="profile" className="profilepic" />
                 <img src={profilepic3} alt="profile" className="profilepic" />
                 <br></br>
                 <ReactTypingEffect text={['Hello World !!']}  speed={100}  eraseDelay={400} className="typingeffect" />
                    <p>Hello !! I am 'Phakphum Phinyodom'. You can call me 'Pom' . I graduated Computer Engineering from Suranaree University of Technology 
                       : Korat : Thailand . My free time i like to learning new Technology  , watch netflix , camping and travel to find new place new people and new experience.  
                         </p>

                         <Social />
             </div>
        );
    }
}

export default About;