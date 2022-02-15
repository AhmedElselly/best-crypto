import {Routes, Route} from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/signup-employer' element={<Employer/>}/>
        <Route exact path='/signup-person' element={<Person/>}/>
        <Route exact path='/signup-corporate' element={<Corporate/>}/>
        <Route exact path='/signup-procedure' element={<SignupProcedure/>}/> */}
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
