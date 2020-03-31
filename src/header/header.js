import React from 'react';
import logo from './Globomantics.jfif';
import './header.css'

const Header = () => (
    <header className= "row">
        <div className ="col-md-5">           
            <img src= {logo} className="logo" alt ="logo" />
        </div>
        <div className ="col-md-7 mt-5 subtitle">
            Providing House world wide
        </div>
    </header>
);
export default Header;