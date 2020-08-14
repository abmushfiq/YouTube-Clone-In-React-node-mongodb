import React from 'react'
import SideBar from "../Components/SideBar";
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "../Components/ChannelRow";
import ChannelImg from "../images/youtube.png";
import VidoeRow from '../Components/VideoRow'
import VideoRow from '../Components/VideoRow';
import thum2 from "../images/thum2.jpg";

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

            <ChannelRow image= {ChannelImg}
            channel='Youtube'
            verified
             subs='660k'
              noOfVideos={382}
               description ='you can find and watch amazing videos and you can create your own content'
                
                />

                <hr />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />

                <VideoRow
                views='1.4M'
                subs='659k'
                description='Do you want to free training check thi video'
                timestamp='59 second ago'
                channel='youtube'
                title='lets build you tube clone'
                image={thum2}
                />
            </div>
        </div>
    )
}

export default SearchPage;
