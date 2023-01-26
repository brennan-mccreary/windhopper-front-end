//Imports
import React from 'react';
import { 
    Link,
    Route,
    Routes } from 'react-router-dom';
import './Home.css';
import Newsletter from '../../components/Newsletter/Newsletter';

//Stateless functional component
const Home = (props) => {
    return ( 
        <div className='home-container home-bg'>
            <h1 className='home-title home-center'>Windhopper Games</h1>
            <Newsletter/>
        </div>
     );
}
 
//Export
export default Home;