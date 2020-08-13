import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/MenuSharp'
import SearchIcon from '@material-ui/icons/Search' 
import AppsSharp from '@material-ui/icons/AppsSharp'
import VideoCallSharp from '@material-ui/icons/VideoCallSharp'
import NotificationsSharp from '@material-ui/icons/NotificationsSharp'
import Avatar from '@material-ui/core/Avatar'
import { Link} from 'react-router-dom'


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className='header'>

            <div className='header__left'>
        <MenuIcon />

        <Link to ={`/`}>
        <img 
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='Youtube'/>
        </Link>
            </div>

            <div className='header__input'>
            <input onChange={e => setInputSearch(e.target.value)} type='text' placeholder='Search'  value= {inputSearch}/>

            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header__inputButton' />
            </Link>
            </div>
            
            <div className='header__icons'>

            <VideoCallSharp className='header__icon' />
            <AppsSharp className='header__icon'/>
            <NotificationsSharp className='header__icon'/>
            <Avatar />
            </div>
        </div>
    )
}

export default Header;
