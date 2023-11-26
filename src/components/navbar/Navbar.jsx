import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { GiGasStove } from "react-icons/gi";
import { MdContacts } from "react-icons/md";



const Navbar = () =>{
    return(
        <div className='nav'>
            <Link to="../home/Home.jsx" className='navText'><FaHome /> Home</Link>
            <Link to="../mealCount/MealCount.jsx" className='navText'><GiMeal /> Meal Count</Link>
            <Link to="../expenses/Expenses.jsx" className='navText'><FaSackDollar /> Expenses</Link>
            <Link to="../utility/Utility.jsx" className='navText'><GiGasStove /> Utility</Link>
            <Link to="../contacts/Contacts.jsx" className='navText'><MdContacts /> Contacts</Link>
        </div>
    )
}

export default Navbar;