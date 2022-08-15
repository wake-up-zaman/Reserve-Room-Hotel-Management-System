import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';
import './HotelList.css'
const HotelList = () => {
    const location = useLocation();
    console.log(location);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false)
    const [options,setOptions]=useState(location.state.options);

    return (
        <div className='listContainer'>
            <div className='listWrapper'>
                <div className='listSearch'>
                    <h1 className='IsTitle'>Search</h1>
                    <div className='IsItem'>
                        <label>Destination</label>
                        <input placeholder={destination} type='text'></input>
                    </div>
                    <div className='IsItem'>
                        <label>Check-in Date</label>

                        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                            date[0].endDate, "MM/dd/yyyy"
                        )}`}</span>
                        {openDate && <DateRange
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}

                        />}
                    </div>
                    <div className='IsItem'>
                        <label>Options</label>
                        <div className='IsOptions'>
                        <div className='IsOptionItem'>
                            <span className='IsOptionText'>
                                Min Price <small>per night</small>
                            </span>
                            <input type='number' className='IsOptionInput'></input>
                        </div>
                        <div className='IsOptionItem'>
                            <span className='IsOptionText'>
                                Max Price <small>per night</small>
                            </span>
                            <input type='number' className='IsOptionInput'></input>
                        </div>
                        <div className='IsOptionItem'>
                            <span className='IsOptionText'>
                                Adult 
                            </span>
                            <input type='number' className='IsOptionInput' min={1} placeholder={options.adult}></input>
                        </div>
                        <div className='IsOptionItem'>
                            <span className='IsOptionText'>
                                Children
                            </span>
                            <input type='number' className='IsOptionInput' min={0} placeholder={options.children}></input>
                        </div>
                        <div className='IsOptionItem'>
                            <span className='IsOptionText'>
                                Room
                            </span>
                            <input type='number' className='IsOptionInput' min={1} placeholder={options.room}></input>
                        </div>
                        </div>
                        
                    </div>
                    <button>Search</button>
                </div>
                <div className='listResult'>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                </div>
                
            </div>
        </div>
    );
};

export default HotelList;