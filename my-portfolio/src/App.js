import './App.css';
import imge from './image/myself.png'



function App() {
  return (
    <div className="App">
      <body>
        <h1 className='header'> Samiul Ahmed</h1>
        <img className='image' alt='my pic' src={imge} />

        <div>
          <button className='firstpart'>
            <h2>Education</h2>
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
