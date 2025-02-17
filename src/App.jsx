
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import TaskManager from './pages/TaskManager'
import Home from './pages/Home'

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-sans  bg-blue-200 text-white">
      <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/task-manager" element={<TaskManager/>} />
      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
