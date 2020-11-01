import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <div className='logo'></div>
            </Link>
            <div className='nav-container'> 
                <Link className='option' to='/'>Injured</Link>
                <Link className='option' to='/safe'>Safe</Link>
            </div>
        </div>
    )
};

export default Header;
