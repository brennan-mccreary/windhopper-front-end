//Imports
import React, {useState} from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';

//Import Components/Pages
import Home from "../pages/Home/Home"
//import Community from "../pages/Community/Community";

//Stateless functional component
const App = () => {
    // const [user, setUser] = useState(undefined);
    // const [pollId, setPollId] = useState(undefined);

    return(
        <div className='app-bg'>
            {/* Routes for each main page */}
            <Routes>
                <Route exact path='/'
                    element={
                        <Home
                        //pass variable here
                        />
                    }/>
                {/* <Route path='/community'
                    element={
                        <Community 
                        //pass variable here
                        />
                    }/> */}
            </Routes> 
        </div>    
    )
}


export default App;