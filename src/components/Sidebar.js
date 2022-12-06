import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <nav class="navbar background">
                        <div class="logo">
                        <img src="https://scontent.fdel40-1.fna.fbcdn.net/v/t39.30808-6/310432034_435362545395367_2736683329130491884_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b2_EYNVaJfUAX_hFvgM&_nc_oc=AQmMbYGRKovNNa_S0N22j2oUbuAkb2JVCs7zClK_xgU0GIKbw5bTnaFlA5qbYeIMWoo&_nc_ht=scontent.fdel40-1.fna&oh=00_AfBrmanULl9LaLMhcdk1Gq9PJpnDR5DA90LgvIwzGJ9hYA&oe=639556EF" height={70} width={70} alt="logo"/>
                        </div>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/aboutUs">About</Link></li>
                    <br></br>
                    <NavLink to="/">Logout</NavLink>
             </nav>
    </div>
  )
}

export default Dashboard
