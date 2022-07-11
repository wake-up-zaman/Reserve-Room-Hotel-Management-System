import { faBed, faCar, faPlane, faTaxi, faCalendarDays, faPerson,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import img1 from '../../Images/banner.jpg'
import img2 from '../../Images/banner2.jpg'
import img3 from '../../Images/banner3.jpg'
import img4 from '../../Images/banner4.jpg'
import img10 from '../../Images/banner10.webp'
import img11 from '../../Images/banner11.webp'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"


const Banner = () => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOption=(name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,[name]: operation ==='i' ? options[name] + 1: options[name]-1
            };
        })
    }
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div>
            <div className='banner'>
                <div className='bannerContainer'>
                    <div className='container-special'>
                        <div className='bannerSlider1'>
                            <img className='slide_img' src={img1} alt=''></img>
                            <img className='slide_img' src={img2} alt=''></img>
                            <img className='slide_img' src={img10} alt=''></img>
                            <img className='slide_img' src={img11} alt=''></img>
                        </div>
                    </div>

                    <div className='bannerContent'>
                        <h1 className='bannerTitle'>Customer Satisfaction Is Our Main Concern</h1>
                        <p className='bannerDesc'>
                            Get rewarded for your travels unlock instant saving of 10% or more with a free Reserve-Room account
                        </p>
                        <button className='bannerButton'>Contact Now</button>
                    </div>
                </div>
            </div>
            <div className='bannerSearch'>
                <div className='bannerSearchItem'>

                    <FontAwesomeIcon icon={faLocationDot} className='bannerIcon' />
                    <input
                        type='text'
                        placeholder='Enter Desired Place !'
                        className='bannerSearchInput'
                    />
                </div>
                <div className='bannerSearchItem'>
                    <FontAwesomeIcon icon={faCalendarDays} className='bannerIcon' />
                    <span onClick={() => setOpenDate(!openDate)} className='bannerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                    />}
                </div>
                <div className='bannerSearchItem'>
                    <FontAwesomeIcon icon={faPerson} className='bannerIcon' />
                    <span onClick={()=>setOpenOptions(!openOptions)} className='bannerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {openOptions && <div className='options'>
                        <div className='optionItem'>
                            <span className='optionText'>Adult</span>
                            <div className='optionCounter'>
                                <button
                                disabled={options.adult <=1}
                                className='optionCounterButton'
                                onClick={()=>handleOption('adult','d')}
                                >
                                -
                                </button>
                                <span className='optionCounterNumber'>{options.adult}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption('adult','i')}>+</button>
                            </div>
                        </div>
                        <div className='optionItem'>
                            <span className='optionText'>Children</span>
                            <div className='optionCounter'>
                                <button
                                disabled={options.children <=0}
                                className='optionCounterButton' 
                                onClick={()=>handleOption('children','d')}
                                >
                                -
                                </button>
                                <span className='optionCounterNumber'>{options.children}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption('children','i')}>+</button>
                            </div>
                        </div>
                        <div className='optionItem'>
                            <span className='optionText'>Room</span>
                            <div className='optionCounter'>
                                <button
                                disabled={options.room <=1}
                                className='optionCounterButton' 
                                onClick={()=>handleOption('room','d')}
                                >
                                -
                                </button>
                                <span className='optionCounterNumber'>{options.room}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption('room','i')}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='bannerSearchItem'>
                    <button className='bannerBtn'>Search</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;