import React  from 'react';
import './Header.css';
import logo from '../../img/cinema.png';

const Header = () => (
    <header className = "app-header">
        <img className = "logo" src = { logo } alt = "logo"/>
    </header>
)
export default Header;