import React from 'react';
import zu from '../../Images/zu.jpg';
import du from '../../Images/dub.jpg';
import ams from '../../Images/ams.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
            
                <img className='featuredImg' src={zu} alt=''></img>
                <div className='featuredTitles'>
                    <h1>Zürich</h1>
               
                </div>
                <p className='properties'>544 Properties</p>
            </div>
            <div className='featuredItem'>
                <img className='featuredImg' src={du} alt=''></img>
                <div className='featuredTitles'>
                    <h1>Dubai</h1>
                
                </div>
                <p className='properties'>254 Properties</p>
            </div>
            <div className='featuredItem'>
                <img className='featuredImg' src={ams} alt=''></img>
                <div className='featuredTitles'>
                    <h1>Amsterdam</h1>
                    
                </div>
                <p className='properties'>124 Properties</p>
            </div>
            
        </div>
    );
};

export default Featured;