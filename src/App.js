import './App.css';
import Header from './Header/Header';
import Cart from './Pages/Cart/Cart';
import Homepage from './Pages/Cart/Homepage/Homepage';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
