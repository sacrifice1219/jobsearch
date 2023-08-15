import React from 'react';
import simple from '../../Assets/simple.png';
import valentine from '../../Assets/valentines.png';
import shield from '../../Assets/shield.png';

const Value = () => {
  return (
    <div className='valueContainer'>
        <h1 className='valueText'>
            The value that holds us true and to account
        </h1>

        <div className="valueGrid">
            <div className="singleGrid">
                <div className="singleFlex">
                    <div className="imgDiv">
                        <img src={simple} alt='' className='img'/>
                    </div>

                    <span className="imgSpan">Simplicity</span>
                </div>
                <p className="imgText">Things being made beautiful simple are at the heart of everything we do.</p>
            </div>

            <div className="singleGrid2">
                <div className="singleFlex">
                    <div className="imgDiv">
                        <img src={valentine} alt='' className='img'/>
                    </div>

                    <span className="imgSpan">Simplicity</span>
                </div>
                <p className="imgText">we believe in maming things better for everyone, even if just by a little bit!</p>
            </div>

            <div className="singleGrid3">
                <div className="singleFlex">
                    <div className="imgDiv">
                        <img src={shield} alt='' className='img'/>
                    </div>

                    <span className="imgSpan">Simplicity</span>
                </div>
                <p className="imgText">We work on the basis of creating trust which can be nurtured through authenticity and transparency</p>
            </div>
        </div>

        <div className='card'>
            <div>
                <h1 className="CardText">
                    Ready to switch a career
                </h1>
                <h2 className="cardtext2">
                    Let's get started!
                </h2>
            </div>

            <button className='ValueButton'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Value;