import React from 'react';
import './Newsletter.css';


const Newsletter = (props) => {
    return (
        <div className='newsletter-container'>
            <form className='newsletter-form'>
                <div>
                    <h2 className='newsletter-header'>Join Our Newsletter</h2>
                    <input type="email" placeholder='your.email@domain.com' className='newsletter-input' />
                </div>
                <div>
                    <button className='newsletter-button'>Join</button>
                </div>
            </form>
        </div>
    );
}

export default Newsletter;