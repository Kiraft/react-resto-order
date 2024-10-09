import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './modules/auth/Auth';
import { Order } from './modules/order/page/Order';
import { Admin } from './modules/admin/page/Admin';

function App() {
  return (
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<Auth/>}/>
               <Route path='order' element={<Order/>}/>
               <Route path='admin' element={<Admin/>}/>
          </Routes>
     </BrowserRouter>
  );
}

export default App;
