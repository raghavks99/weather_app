import Search from './components/Search'
import './App.css';

function App() {

  return (
    <div className='main'>
      <div className='weather-app'>
        <div>
          <h1 className='header'>Weather App</h1>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;
  