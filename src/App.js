import './App.css';
import Random from './Components/Random';
import Tags from './Components/Tags';

function App() {
  return (
    <div className="App">
      <div className='heading'>RANDOM GIFS</div>
      <Random />
      <Tags />
    </div>
  );
}

export default App;
