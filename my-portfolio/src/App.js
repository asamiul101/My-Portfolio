import './App.css';
import imge from './image/myself.png';
import {Routes, Route, Router} from "react-router-dom";
import Education from './education';
import Projects from './projects';
import Aboutme from './aboutme';
import Home from './home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
      </Routes>
    </div>
  );
}

export default App;
