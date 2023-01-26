//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Community.css';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';

//Stateless functional component
const Community = (props) => {
    return ( 
        <div className='community-container'>
            <NavBar/>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        {/* <CalendarView/> */}
                        <SocialMediaButtons/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

//Exports
export default Community;