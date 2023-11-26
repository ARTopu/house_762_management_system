import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header"
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home.jsx"
import MealCount from './components/mealCount/MealCount';
import Expences from './components/expenses/Expenses.jsx';
import Utility from './components/utility/Utility';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div>
      
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/home/Home.jsx" element={<Home/>}/>
        <Route path="/mealCount/MealCount.jsx" element={<MealCount/>}/>
        <Route path="/expenses/Expenses.jsx" element={<Expences/>}/>
        <Route path="/utility/Utility.jsx" element={<Utility/>}/>
        <Route path="/contacts/Contacts.jsx" element={<Contacts/>}/>
       </Routes>
    </div>
  );
}

export default App;
