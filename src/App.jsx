import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>  
   <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategoria" element={<ItemListContainer />} />
          <Route path="/mangaDetalles/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<p>CARRTIO</p>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
   
   </BrowserRouter>
   
  
   
  )
}

export default App
