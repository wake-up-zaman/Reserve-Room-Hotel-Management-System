import React from 'react';
import rad from '../../Images/rad.webp'
import salam from '../../Images/salam.jpg'
import cox from '../../Images/cox-bazar.webp'
import sy from '../../Images/sy.jpg'
const PropertyList2 = () => {
    return (
        <div className='fp'>
        <div className='fpItem'>
            <img className='fpImg' src={rad} alt=''></img>
            <span className='fpName'>Radisson Blu Dhaka Water Garden</span>
            <span className='fpCity'>Dhaka</span>
            <span className='fpPrice'>Starting From $370</span>
            <div className='fpRating'>
                <button>8.9</button>
                <pan>Exceptional</pan>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src={salam} alt=''></img>
            <span className='fpName'>Hotel Castle Salam - Khulna</span>
            <span className='fpCity'>Khulna</span>
            <span className='fpPrice'>Starting From $140</span>
            <div className='fpRating'>
                <button>8.0</button>
                <pan>Satisfactory</pan>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src={cox} alt=''></img>
            <span className='fpName'>Long Beach Hotel Cox's Bazar</span>
            <span className='fpCity'>Cox's Bazar</span>
            <span className='fpPrice'>Starting From $220</span>
            <div className='fpRating'>
                <button>8.5</button>
                <pan>Excellent</pan>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src={sy} alt=''></img>
            <span className='fpName'>Hotel Star Pacific</span>
            <span className='fpCity'>Sylhet</span>
            <span className='fpPrice'>Starting From $120</span>
            <div className='fpRating'>
                <button>8.1</button>
                <pan>Very Good</pan>
            </div>
        </div>
        </div>

    );
};

export default PropertyList2;