import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {BsHouseDoor} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';

const Search = () => {
  return (
    <div className='searchDiv'>
        <form action=''>
            <div className="firstDiv">
                <div className="Flex">
                    <AiOutlineSearch className='icon'/>
                    <input type="text" className='transparent' placeholder='Search Job Here' />
                    <AiOutlineCloseCircle className='icon text'/>
                </div>
               
                <div className="Flex">
                    <BsHouseDoor className='icon'/>
                    <input type="text" className='transparent' placeholder='Search by Company' />
                    <AiOutlineCloseCircle className='icon text'/>
                </div>
                <div className="Flex">
                    <CiLocationOn className='icon'/>
                    <input type="text" className='transparent' placeholder='Search by location' />
                    <AiOutlineCloseCircle className='icon text'/>
                </div>

                <button className='blueColor'>
                    Search
                </button>
            </div>
        </form>

    <div className="secDiv">
        <div className="singleSearch">
            <label htmlFor='relevance' className='label'>Sort By:</label>

            <select name='' id='relevance' className='select'>
                <option value={''}>Relevance</option>
                <option value={''}>Inclusive</option>
                <option value={''}>Starts With</option>
                <option value={''}>Contains</option>
            </select>
        </div>
        <div className="singleSearch">
            <label htmlFor='type' className='label'>Type:</label>

            <select name='' id='type' className='select'>
                <option value={''}>Full-time</option>
                <option value={''}>Remote</option>
                <option value={''}>Contract</option>
                <option value={''}>Part-time</option>
            </select>
        </div>
        <div className="singleSearch">
            <label htmlFor='level' className='label'>Level:</label>

            <select name='' id='level' className='select'>
                <option value={''}>Senior</option>
                <option value={''}>Beginner</option>
                <option value={''}>Intermediate</option>
                <option value={''}>Advocate</option>
            </select>
        </div>

        <span className='clear'>
    Clear All
        </span>

    </div>

    </div>
  )
}

export default Search;