import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import ServiseDetail from './pages/ServisesDetail/ServiseDetail';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/servic/:servicId' element={<ServiseDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
