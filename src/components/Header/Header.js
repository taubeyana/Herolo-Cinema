import React  from 'react';
import './Header.css';
import logo from '../../img/cinema.png';

const Header = () => (
    <header className = "app-header">
        <img className = "logo" src = { logo } alt = "logo"/>
        <h1> Movies-Library </h1>
    </header>
)
export default Header;