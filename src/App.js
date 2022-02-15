import {Routes, Route} from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';
import Footer from './components/Footer';
import Gamefi from './pages/Gamefi';
import Earn from './pages/Earn';

function App() {
  return (
    <div className='App'>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/gamefi' element={<Gamefi/>}/>
        <Route exact path='/earn' element={<Earn/>}/>        
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
