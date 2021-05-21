import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <Header />
            <Countdown />
        </div>
    );
}

const Header = () => {
  return (<header className="App-header"><h1>Manitoban COVID restrictions over in:</h1></header>)
}

const Countdown = () => {
    const [countdown, setCountdown] = useState({days:0, hours:0, minutes:0, seconds:0});
    const formatTime = (time) => (time < 10 ? `0${time}` : time)

    useEffect(() => {
        const dateLift = new Date('May 30 2021')
        const interval = setInterval(() => {
            const dateCurrent = new Date()
            const totalSeconds = (dateLift - dateCurrent) / 1000
            const days = Math.floor(totalSeconds / 3600 / 24)
            const hours = Math.floor(totalSeconds / 3600) % 24
            const minutes = Math.floor(totalSeconds / 60) % 60
            const seconds = Math.floor(totalSeconds) % 60
            setCountdown({days, hours, minutes, seconds})
        }, 100)
        return () => clearInterval(interval)
    })


    return (
        <div className='countdown-container'>
            <div className='countdown-el countdown-days'>
                <p className='text-large'>{formatTime(countdown.days)}</p>
                <span>days</span>
            </div>
            <div className='countdown-el countdown-hours'>
                <p className='text-large'>{formatTime(countdown.hours)}</p>
                <span>hours</span>
            </div>
            <div className='countdown-el countdown-minutes'>
                <p className='text-large'>{formatTime(countdown.minutes)}</p>
                <span>minutes</span>
            </div>
            <div className='countdown-el countdown-seconds'>
                <p className='text-large'>{formatTime(countdown.seconds)}</p>
                <span>seconds</span>
            </div>
        </div>
    )
}


export default App;
