import React  from 'react';
import './Header.css';
import Search from '../../common/Search/Search';

const Header = props => (
    <header className = 'app-header'>
        <h1> { props.title } </h1>
        <Search/>
    </header>
)
export default Header;