import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import FriendDetail from './components/FriendDetail'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/frienddetail' element={<FriendDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
