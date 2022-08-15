import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Hotel from '../Hotel/Hotel';
import MailList from '../MailList/MailList';
import PropertyList from '../PropertyList/PropertyList';
import PropertyList2 from '../PropertyList2/PropertyList2';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='homeContainer'>
                <Featured/>
                <h1 className='homeTitle'>Browse By Property Type</h1>
                <PropertyList></PropertyList>
                <h1 className='homeTitle'>Explore Bangladesh</h1>
                <PropertyList2></PropertyList2>
                <MailList></MailList>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;