import React from 'react'
import SideBar from "../Components/SideBar";
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import channelRow from "../Components/ChannelRow";
import ChannelImg from "../images/youtube.png";

function SearchPage() {
    return (
        <div className='fullapp__searchpage__container'>
            <SideBar />
            <div className='searchpage__container'>
            <div className='searchPage__filter'>
            <TuneIcon />
            <h2>FILTER</h2>
           
            </div>
            <hr />

            <channelRow image= {ChannelImg}
            channel='Youtube'
             subs
              noOfVideos
               description
                verified 
                />
            </div>
        </div>
    )
}

export default SearchPage;
