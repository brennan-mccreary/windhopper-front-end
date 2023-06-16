import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from '../../images/placeholder.png';
import './Team.css';

const teamMembers = [
    {
        name: "Brennan McCreary",
        title: "Lead Developer",
        pfp: Placeholder
    },
    {
        name: "Michael Marro",
        title: "Head of Marketing",
        pfp: Placeholder
    },
    {
        name: "Cody Roberts",
        title: "Level Designer",
        pfp: Placeholder
    },
    {
        name: "Chris Marro",
        title: "Level Designer",
        pfp: Placeholder
    },
    {
        name: "Ashton Leet",
        title: "Character Designer",
        pfp: Placeholder
    },
]

const Team = () => {
    return ( 
        <div className='car-container'>
            <Carousel>
                {teamMembers.map((member, i) => (
                    <Carousel.Item interval={5500} key={i}>
                        <div className="car-container-item">
                            <img
                            className="car-container-img"
                            src={member.pfp}
                            alt="slide"
                            />
                        </div>
                            <div className="car-container-text">
                                <Carousel.Caption>
                                    <h3>{member.name}</h3>
                                    <p>{member.title}</p>
                                </Carousel.Caption>
                            </div> 
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
     );
}
 
export default Team;