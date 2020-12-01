import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube_Logo"
            />
            <input type="text" />
            <SearchIcon />
            <VideoCallSharpIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar />
        </div>
    )
}

export default Header;
