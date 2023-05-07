
import './App.css';

// components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

    // <div>
    //   {/* <Header />
    //   <TodoForm />
    //   <Todos /> */}
    //   <Login />
    // </div>
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element= {<SignUp />} />
      </Routes>
    </Router>

  );
}

export default App;
