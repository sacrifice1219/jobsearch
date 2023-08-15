import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai'; 

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <div className="logoDiv">
            <h1 className="logo2">
                <strong>Job</strong>Search
            </h1>
        </div>

        <p className='footerText'>
            We always make our seekers and companies find the best jobs and employers find the best candidate
        </p>
        </div>

        <div className='footerGrid'>
            <span className='divTitle'>
                Company
            </span>

            <div className='GirdGap'>
                <li className='footerList'> About</li>
                <li className='footerList'> Features</li>
                <li className='footerList'> News</li>
                <li className='footerList'> FAQ</li>
            </div>
        </div>

        <div className='footerGrid'>
            <span className='divTitle'>
                Resources
            </span>

            <div className='GirdGap'>
                <li className='footerList'> Account</li>
                <li className='footerList'> Support Center</li>
                <li className='footerList'> Feedback</li>
                <li className='footerList'> Contact Us</li>
            </div>
        </div>

        <div className='footerGrid'>
            <span className='divTitle'>
                Support
            </span>

            <div className='GirdGap'>
                <li className='footerList'> Events</li>
                <li className='footerList'> Promo</li>
                <li className='footerList'> Req Demo</li>
                <li className='footerList'> Careers</li>
            </div>
        </div>

            <div className='footerGrid'>
                <span className='divTitle'>
                    Contact Info
                </span>

                <div>
                    <small className='footerContact'>
                    Luckyfavour1219@gmail.com 
                    </small>

                    <div className='icons footerIcon'>
                        <AiFillInstagram className='footerA icon'/>
                        <BsFacebook className='footerA icon'/>
                        <AiOutlineTwitter className='footerA icon'/>
                    </div>
                </div>
        </div>
    
    </div>
  )
}

export default Footer;