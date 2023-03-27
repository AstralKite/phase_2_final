import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function Header( {darkMode, setDarkMode} ){

    const buttonMode = (darkMode ? "Light Mode" : "Dark Mode");

    function toggleDarkMode(){
        setDarkMode( ()=> !darkMode)
    }

    return(
        <div className='grid-container '>
            <Link to="/">
                <h1 className='title'>Pokemon Card Collection</h1>
            </Link>
            
            <nav>
                <NavLink className='buttonNav'  to="/">Home</NavLink>
                <NavLink className='buttonNav'  to="/cards">View Cards</NavLink>
                <NavLink className='buttonNav'  to="/cards/add">Add Card</NavLink>
            </nav>

            <span>
                <button className='mode' onClick={toggleDarkMode}>{buttonMode}</button>
            </span>

        </div>
    )
}

export default Header;