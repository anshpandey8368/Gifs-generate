import './Random.css';
import React, { useState } from 'react';
import Spinner from './Spinner';
import './Tags.css';
import useGif from '../hook/useGif'; 


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tags = () => {
    const [tag , setTag] = useState('');
    const {gif , loading , fetchData} = useGif(tag);

    return (
        <div className='tags'>
            <div className='card-head'>RANDOM GIF</div>
                {
                loading ? (<Spinner />) : (<img src={gif} alt="Random GIF" />)
                }

            <input type='text' onChange={(event) => setTag(event.target.value)} value={tag}></input>    
            <button onClick={() => fetchData(tag)}>Generate</button>
        </div>
    );
}

export default Tags;