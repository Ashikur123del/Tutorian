import { Route, Routes } from 'react-router-dom'
import Root from './Layout/Root'
import Home from './Pages/Home/Home'
import AddToCards from './Pages/AddToCard/AddToCards'
import Coure from './Pages/Courespage/Coures'
import EducationPart from './Pages/EducationPart/EducationPart';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/addtocards' element={<AddToCards />} />
        <Route path='/coure' element={<Coure />} />
        <Route path='/educationprat' element={<EducationPart />} />
      </Route>
    </Routes>
  )
}

export default App
