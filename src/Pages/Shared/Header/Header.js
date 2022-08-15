import React from 'react';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <div>
                    <FontAwesomeIcon className='navbarIcon' icon={faBed} />
                </div>
                <span className='navItems'>Reserve-Room</span>
                <div className='navItemsRight'>
                    <div className='navItemsHome'>
                    <Link to="/"><button className='navButtonHotel'>Home</button></Link>
                        
                    </div>
                    <div className='navItemsHotel'>
                    <Link to="/about"><button className='navButtonHotel'>About</button></Link>
                        
                    </div>
                    <div className='navItemsLogin'>
                    <Link to="/login"><button className='navButtonSignUp'>Login</button></Link>

                    </div>
                    {/* <div className='navItemsSignUp'>
                        <button className='navButtonSignUp'>Sign Up</button>

                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Header;