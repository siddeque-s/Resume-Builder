
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ResumeGenerator from './pages/ResumeGenerator'
import Header from './components/Header'
import History from './pages/History'
import PNF from './pages/PNF'
import Form from './pages/Form'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resumeGenerator' element={<ResumeGenerator/>} />
        <Route path='/history' element={<History/>} />
        <Route path='*' element={<PNF/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App
