import React from 'react'


const QuoteBox = () => {
    return (
        <div className='quote-box'>
            <p clasName='text'>This is the quote......</p>
            <p className='author'>This is the author</p>
            <button className='new-quote'>New Quote</button>
            <a className='tweet-quote' href='/' target='blank'>Tweet quote</a>
        </div>
    )
}

export default QuoteBox
