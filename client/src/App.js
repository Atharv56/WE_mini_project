
import './App.css';

// components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Hero from './components/Hero';

import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element= {<SignUp />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
