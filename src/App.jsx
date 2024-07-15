import Home from './page/Home'
import NewAnimal from './page/NewAnimal'
import Encabezado from './Components/Header'
import Error from './page/404'
import Pie from './Components/Footer/Pie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Encabezado/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/NewAnimal' element={<NewAnimal/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Pie/>
      </Router>

  )
}

export default App
