import React, { useState } from 'react';
import './RandomQuotes.css'
import RandomData from './QuotesData';

const RandomQuotes = () => {

  const random = ()=> {
    const select = RandomData[Math.floor(Math.random()*RandomData.length)];
    setQuote(select)
  }

  const [quote, setQuote] = useState({
    text: "If you put in your all, you'll stand your ground even in death.",
    author: 'Kyojuro Rengoku',
  });

  return (
    <div style={{marginTop:'170px', marginBottom:'100px'}}>
        <p className='display-5 second'>Quote of the day</p>
      <div className='container' style={{ position: 'relative' }}>
      <i className='bx bxs-quote-left' style={{ fontSize: '50px',color: "#625ac4", position: 'absolute', left:'35px' , top:'30px' }}></i>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>- {quote.author.split(',')[0]}</div>
          <div className='icon'>
            <i className='bx bx-loader' onClick={random}></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RandomQuotes;