
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ResumeGenerator from './pages/ResumeGenerator'
import Header from './components/Header'
import History from './pages/History'
import PNF from './pages/PNF'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resumeGenerator' element={<ResumeGenerator/>} />
        <Route path='/history' element={<History/>} />
        <Route path='*' element={<PNF/>} />
      </Routes>
    </>
  )
}

export default App
