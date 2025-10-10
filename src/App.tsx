import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import QuemSomos from './pages/quemSomos/QuemSomos'
import Blog from './pages/blog/Blog'
import SejaParceiro from './pages/sejaParceiro/SejaParceiro'
import Plataforma from './pages/plataforma/Plataforma'
import BaixarApp from './pages/baixarApp/BaixarApp'
import Contato from './pages/contato/Contato'
import Conta from './pages/conta/Conta'
import Navbar from './components/header/Header'

export default function App() {

  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={< Inicio />}/>
        <Route path='/quem-somos' element={< QuemSomos />}/>
        <Route path='/blog' element={< Blog />}/>
        <Route path='/seja-parceiro' element={< SejaParceiro />}/>
        <Route path='/plataforma' element={< Plataforma />}/>
        <Route path='/baixar-app' element={< BaixarApp />}/>
        <Route path='/contato' element={< Contato />}/>
        <Route path='/conta' element={< Conta />}/>
      </Routes>
    </div>
  )
}

