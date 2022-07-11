import React from 'react';
import hotel  from '../../Images/hotel.jpg';
import apartment from '../../Images/apartment.jpg';
import resort from '../../Images/resort.jpg';
import villa from '../../Images/villa.webp';
import cabin from '../../Images/cabin2.webp';
const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img className='pListImg' src={hotel} alt=''></img>
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    
                </div>

            </div>
            <div className='pListItem'>
                <img className='pListImg' src={apartment} alt=''></img>
                <div className='pListTitles'>
                    <h1>Apartments</h1>
                    
                </div>

            </div>
            <div className='pListItem'>
                <img className='pListImg' src={resort} alt=''></img>
                <div className='pListTitles'>
                    <h1>Villas</h1>
                    
                </div>

            </div>
            <div className='pListItem'>
                <img className='pListImg' src={villa} alt=''></img>
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    
                </div>

            </div>
            <div className='pListItem'>
                <img className='pListImg' src={cabin} alt=''></img>
                <div className='pListTitles'>
                    <h1>Cabins</h1>
                    
                </div>
                {/* <h2 className='list2'>Available: 1233</h2> */}
            </div>
            
        </div>
    );
};

export default PropertyList;