import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/https://yohran1.github.io/portfolio/' element={<Home />} />
        <Route path='/https://yohran1.github.io/portfolio/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
