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
        
        {/* এই রাউটটি এখন কাজ করবে /dashboard/mycoures এ গেলে */}
        <Route path='mycoures' element={<MyCoures />} />
        
        {/* যখন নির্দিষ্ট কোর্সে ক্লিক করবেন তখন এটি কাজ করবে */}
        <Route path='mycoures/:courseSlug' element={<MyCoures />} /> 
      </Route>
    </Routes>
  );
}

export default App;