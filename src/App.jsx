import { Route, Routes } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import AddToCards from './Pages/AddToCard/AddToCards';
import Coure from './Pages/Courespage/Coures';
import EducationPart from './Pages/EducationPart/EducationPart';
import Auth from './Components/Auth';
import CouresDeitlesPage from './Pages/CouresDetilesPage/CouresDeitlesPage';
import MyCards from './Pages/CouresDetilesPage/MyCards/MyCards';
import PaymentPages from './Pages/CouresDetilesPage/MyCards/PaymentPages';
import PaymentSucces from './Components/PaymentComonet/PaymentSucces';
import Dashboard from './Components/Dashboard/Dashboard';
import MyCoures from './Pages/MyCoures/MyCoures';
import DashboardLayout from './Layout/DashboardLayout/DashboardLayout';
import Exams from './Pages/MyCoures/Exams';
import ExamDetails from './Pages/MyCoures/ExamDetails';


function App() {
  return (
    <Routes>
      {/* ১. সাধারণ ইউজারদের জন্য লেআউট (Navbar + Footer) */}
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='addtocards' element={<AddToCards />} />
        <Route path='coure' element={<Coure />} />
        <Route path='educationprat' element={<EducationPart />} />
        <Route path='auth' element={<Auth />} />
        <Route path='couresdeitlespage' element={<CouresDeitlesPage />} />
        <Route path='mycards' element={<MyCards />} />
        <Route path='paymentpage' element={<PaymentPages />} />
        <Route path='paymentsucces' element={<PaymentSucces />} />
      </Route>

    {/* ২. ড্যাশবোর্ড লেআউট */}
     <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='mycoures' element={<MyCoures />} />
        <Route path='mycoures/:courseSlug' element={<MyCoures />} />
        <Route path='exams' element={<Exams />} />
        <Route path='examsdetails/:slug' element={<ExamDetails />} />
      </Route>
    </Routes>
  );
}

export default App;