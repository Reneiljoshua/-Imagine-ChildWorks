import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import GetDetails from './pages/GetDetails';
import Recommend from './pages/Recommend';
import Signup from './pages/Signup';
import Selected from './pages/Selected';
import Hotel from './pages/Hotel';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/getdetails' element={<GetDetails />} />
          <Route path='/recommend' element={<Recommend />} />
          <Route path='/selected' element={<Selected />} />
          <Route path='/feedback' element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
