import React from 'react';
import './SideBar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

function SideBar() {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={HomeIcon} title='Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending'/>
            <SidebarRow Icon={SubscriptionsIcon} title='subcription'/>
        </div>
    )
}

export default SideBar;
