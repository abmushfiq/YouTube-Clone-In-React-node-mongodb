import React from 'react';
import './SideBar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function SideBar() {
    return (
        <div className='sidebar'>
            <SidebarRow Selected Icon={HomeIcon} title='Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending'/>
            <SidebarRow Icon={SubscriptionsIcon} title='Subcription'/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
            <SidebarRow Icon={HistoryIcon} title='History'/>
        </div>
    )
}

export default SideBar;
