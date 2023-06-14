//Imports
import React from 'react';
// import { 
//     Link,
//     Route,
//     Routes } from 'react-router-dom';
import './Home.css';
import HeaderImage from '../../images/WHG-Logo-NoBG.png';

//Import Components
import Mission from '../../components/Mission/Mission';
import Newsletter from '../../components/Newsletter/Newsletter';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';
import Portfolio from '../../components/Portfolio/Portfolio';

//Stateless functional component
const Home = (props) => {
    return ( 
        <div className='home-container home-bg'>
            <img src={HeaderImage} alt="Windhopper games logo" className='home-image'/>
            <h1 className='home-title home-center'>Windhopper Games</h1>
            <SocialMediaButtons/>
            <Mission/>
            <Newsletter/>
            {/* <Portfolio/> */}
        </div>
     );
}
 
//Export
export default Home;