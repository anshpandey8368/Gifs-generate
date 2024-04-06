import './Random.css';
import Spinner from './Spinner';
import useGif from '../hook/useGif'; 


const Random = () => {
    const {gif , loading , fetchData} = useGif();

    return (
        <div className='Random'>
            <div className='card-head'>A RANDOM GIF</div>
                {
                loading ? (<Spinner />) : (<img src={gif} alt="Random GIF" />)
                }

            <button onClick={() => fetchData()}>Generate New</button>
        </div>
    );
}

export default Random;
