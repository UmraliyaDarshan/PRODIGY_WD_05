import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Weatherapp from './components/Weatherapp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Weatherapp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
