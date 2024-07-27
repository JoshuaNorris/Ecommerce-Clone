import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import crown from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation: React.FC = () => {

    return (
        <>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link className='nav-link' to='/'>
                        <img src={crown} className='logo'/>
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/sign-in'>
                        SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;