
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ResumeGenerator from './pages/ResumeGenerator'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resumeGenerator' element={<ResumeGenerator/>} />
      </Routes>
    </>
  )
}

export default App
