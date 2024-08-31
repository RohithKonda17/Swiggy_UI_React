import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <img className="logo-swiggy" src="assets/logo-swiggy.jpeg" alt="logo" />
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
            Login
        </div>
   </section>
  )
}

export default TopBar