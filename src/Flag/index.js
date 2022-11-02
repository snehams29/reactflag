import React from 'react'
import flag from './flag.svg';
import './style.css'

const Flag = () => {
    return (
        <div className='flag-div'>
            <div className='top-div'>
                Celebrating
                <span style={{ fontSize: "3rem", fontWeight: 600 }}> 75th </span>
                Anniversary
            </div>
            <div className='orange-div'> </div>
            <div className='white-div'>
                <div className='ashok-chakra-div'>
                    <img src={flag} className="ashok-chakra" alt="flag" />
                </div>
            </div>
            <div className='green-div'> </div>
            <div className='bottom-div'>
                Happy Independence Day
            </div>
        </div>
    )
}

export default Flag