import React from 'react';
import {BiTimeFive} from 'react-icons/bi';
import logo1 from '../../Assets/logo.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.png';
import logo5 from '../../Assets/logo5.png';
import logo6 from '../../Assets/logo6.png';
import logo7 from '../../Assets/logo7.png';
import logo8 from '../../Assets/logo8.png';

//for all the jobs we are going to use high order array method called map
//in this case we shall list all the jobs into an array called Data...

const Data = [
    {
        id:1,
        image: logo1,
        title: 'web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Novac Linus Co.'
    },
    {
        id:2,
        image: logo2,
        title: 'UI Designer',
        time: '14Hrs',
        location: 'Manchester',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Liquid Accessments '
    },
    {
        id:3,
        image: logo3,
        title: 'Software Eng',
        time: '10Hrs',
        location: 'Austria',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'web Tech Agency '
    },
    {
        id:4,
        image: logo4,
        title: 'Ui/Ux Designer',
        time: '10H',
        location: 'Germany',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Government '
    },
    {
        id:5,
        image: logo5,
        title: 'Product Designer',
        time: 'Now',
        location: 'Manchester',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Newcastle '
    },
    {
        id:6,
        image: logo6,
        title: 'Researcher',
        time: '5Hrs',
        location: 'Norway',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Nin Co. '
    },
    {
        id:7,
        image: logo7,
        title: 'Lead Developer',
        time: '14Hrs',
        location: 'Leeds',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Nimeloi - UK '
    },
    {
        id:8,
        image: logo8,
        title: 'Data Scientist',
        time: '2 Days',
        location: 'Turkey',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eos?',
        company: 'Name And Sons '
    }
]

const Jobs = () => {
  return (
    <div>
        <div className="jobContainer">
         {
            Data.map(({id,image,title,time,location,desc,company}) =>{
                return(
                    <div key={id} className="group">
                    <span className='title'>
                         <h1 className='titleH'>{title}</h1>
                        <span className='bitime'>
                            <BiTimeFive/>{time}
                        </span>
                    </span>
                    <h6 className='place'>{location}</h6>
                        <hr/>
                    <p className='place_text'>
                        {desc}
                    </p>
    
                    <div className="company">
                        <img src={image} alt='Company Logo' className='Clogo'/>
                        <span className='novac'>{company}</span>
                    </div>
    
                    <button className='apply'>
                        Apply Now
                    </button>
                </div>
                )
            })
         }

        </div>
    </div>
  )
}

export default Jobs;