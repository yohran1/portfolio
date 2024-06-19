import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
