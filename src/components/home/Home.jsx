import React from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { GiMeal } from "react-icons/gi";
import './Home.css'

const Home=() =>{
    return(
        <div className='containerHome'>
            <h1>Welcome Topu, This Month's (November) ...</h1>
            <div className='cardsHome'>
                <div className='cardHome1'>
                    <div className='cardIcon1'>
                        <GiKnifeFork color="black" size={55}/>
                    </div>
                    <div className='cardText1'>
                        <h3>Meal Count : 25</h3>
                        <h3>Meal Cost : 1781</h3>
                        <h3>Per Meal Cost : 70</h3>
                        <h3>Money : 25</h3>
                    </div>
                </div>
                <div className='cardHome2'>
                <div className='cardIcon2'>
                        <BsCashCoin  color="black" size={55}/>
                    </div>
                    <div className='cardText2'>
                        <h3>Total Grocery Money: 12000</h3>
                        <h3>Total Expense : 6500</h3>
                        <h3>Grocery Money : 5500</h3>
                    </div>
                </div>
                <div className='cardHome3'>
                <div className='cardIcon3'>
                        <HiCurrencyBangladeshi  color="black" size={55}/>
                    </div>
                    <div className='cardText3'>
                        <h3>Electricity : 600</h3>
                        <h3>Gas : 300</h3>
                        <h3>Wifi : 200</h3>
                        <h3>Maid : 750</h3>
                    </div>
                </div>
                <div className='cardHome4'>
                <div className='cardIcon4'>
                        <GiMeal color="black" size={30}/><h2>Today's Meal</h2>
                    </div>
                    <div className='cardText4'>
                        <div className='mealBox'>
                            <h2>Lunch: </h2>
                            <h3>Chicken</h3>
                        </div>
                        <div className='mealBox'>
                            <h2>Dinner: </h2>
                            <h3>Fish</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;