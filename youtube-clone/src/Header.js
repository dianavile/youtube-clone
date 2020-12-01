import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube_Logo"
                />
            </div>
            
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton"/>    
            </div>
            
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icons"/>
                <AppsIcon className="header__icons"/>
                <NotificationsIcon className="header__icons"/>
                <Avatar
                    alt="Diana Vilé"
                    src="https://avatars2.githubusercontent.com/u/25930085?s=60&amp;v=4"
                />
            </div>
            
        </div>
    )
}

export default Header;
