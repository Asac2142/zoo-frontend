import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header-main'>
            <Link className='logo-container' to='/'>
                <div className='logo'></div>
            </Link>
            <div className='hamburguer-btn'/>
            <div className='nav-container'> 
                <Link className='option main' to='/report'>Report new animal</Link>
                <Link className='option' to='/'>Medical attention</Link>
                <Link className='option' to='/safe'>Recovered</Link>
            </div>
        </div>
    )
};

export default Header;
