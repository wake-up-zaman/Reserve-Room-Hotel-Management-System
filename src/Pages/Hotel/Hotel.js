import React from 'react';
import HotelList from '../HotelList/HotelList';

const Hotel = () => {
    return (
        <div>
            <div className='hotelBanner'>
                <div className='hotelBannerContainer'>
                    <h1 className='hotelBannerText1'>World Best Hotels Are Here</h1>
                    <p className='hotelBannerText2'>We Believe Leisure Is An Art</p>
                </div>

            </div>
            <HotelList></HotelList>
        </div>
    );
};

export default Hotel;