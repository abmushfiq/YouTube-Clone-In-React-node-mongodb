import React from 'react'
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";

function channelRow({image, channel, subs, noOfVideos, description, verified}) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' alt={channel} src={image} />
            <div className ='channelRow__logo'>
               <h4>{channel}</h4>
            </div>

            
        </div>
    )
}

export default channelRow;
