import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';  
import AuthForm from './components/AuthForm';  
import Ambulance from './pages/Ambulance'; 
import Cabbook from './pages/Cabbook';
import SelectArea from './pages/SelectArea';
import Grocery from './pages/Grocery';
import Medical from './pages/Medical';
import OldAgeHome from './pages/OldAgeHome';   
import OldAgeHomeDetails from './pages/OldAgeHomeDetails';
import CabOptions from './pages/CabOptions';
import GroceryOptions from './pages/GroceryOptions';
import Home from './pages/home'; 
import PolicyList from './pages/health_scheme';
import Pension from './pages/pension';
import Govt from './pages/govt';
import Select from './pages/select'
import BankCalculator from "./pages/bank"



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/cabbook" element={<Cabbook />} />
          <Route path="/selectArea" element={<SelectArea />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/oldAgeHome" element={<OldAgeHome />} />
          <Route path="/details/:id" element={<OldAgeHomeDetails />} />
          <Route path="/cabOptions" element={<CabOptions />} />
          <Route path="/groceryOptions" element={<GroceryOptions />} />
          <Route path="/home" element={<Home />} />
          <Route path="/health_scheme" element={<PolicyList />} />   
          <Route path="/pension" element={<Pension />} />
          <Route path="/govt" element={<Govt />} />
      <Route path="select" element={<Select />} />
      <Route path="bank" element={<BankCalculator />} />      
        </Routes>
      </Router>
    </div>
  );
}

export default App;