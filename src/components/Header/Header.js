import React  from 'react';
import './Header.css';
import Search from '../../common/Search/Search';
import logo from '../../img/cinema.png';

const Header = props => (
    <header className = "app-header">
        <img className = "logo" src = { logo } alt = "logo"/>
        {/*<Search/>*/}
    </header>
)
export default Header;