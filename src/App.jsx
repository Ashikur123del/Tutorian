import { Route, Routes } from 'react-router-dom'
import Root from './Layout/Root'
import Home from './Pages/Home/Home'
import AddToCards from './Pages/AddToCard/AddToCards'
import Coure from './Pages/Courespage/Coures'
import EducationPart from './Pages/EducationPart/EducationPart';
import Auth from './Components/Auth'
import CouresDeitlesPage from './Pages/CouresDetilesPage/CouresDeitlesPage';
import MyCards from './Pages/CouresDetilesPage/MyCards/MyCards'
import PaymentPages from './Pages/CouresDetilesPage/MyCards/PaymentPages'
import PaymentSucces from './Components/PaymentComonet/PaymentSucces'
import Dashboard from './Components/Dashboard/Dashboard'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/addtocards' element={<AddToCards />} />
        <Route path='/coure' element={<Coure />} />
        <Route path='/educationprat' element={<EducationPart />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/couresdeitlespage' element={<CouresDeitlesPage />} />
        <Route path='/mycards' element={<MyCards />} />
        <Route path='/paymentpage' element={<PaymentPages />} />
        <Route path='/paymentsucces' element={<PaymentSucces />} />
        <Route path='/dashborad' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
