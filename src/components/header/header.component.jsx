import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            hidden: false
        }
    }

    render() {
        return (
            <div className='header-main'>
                <Link className='logo-container' to='/'>
                    <div className='logo'></div>
                </Link>
                <div className='hamburguer-btn' onClick={() => this.setState({ hidden: !this.state.hidden })}/>
                <div className='nav-container' style={{visibility: `${this.state.hidden ? 'visible' : 'hidden'}`}}>
                    <Link className='option main' to='/report' onClick={() => this.setState({ hidden: !this.state.hidden })}>Report new animal</Link>
                    <Link className='option' to='/' onClick={() => this.setState({ hidden: !this.state.hidden })}>Medical attention</Link>
                    <Link className='option' to='/safe' onClick={() => this.setState({ hidden: !this.state.hidden })}>Recovered</Link>
                </div>
                               
            </div>
        )
    }
};

export default Header;
