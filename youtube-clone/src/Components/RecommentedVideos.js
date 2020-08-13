import React from 'react'
import './RecommentedVideos.css'
import VideoCard from "./VideoCard";
import YouImg from '../images/youtube.png'
import Tumb1 from '../images/thum1.jpg'
import NetImg from '../images/netflix.png'
import Tumb2 from '../images/thum2.jpg'
import Tumb3 from '../images/thum3.jpeg'
import Tumb4 from '../images/thum4.png'

function RecommentedVideos() {
    return (
        <div className='recommentedvideo'>
            <h1>Recommended</h1>
            <div className='videocard__frontview__container'>
            <VideoCard  title='How to use youtube' image ={Tumb1} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={YouImg}/>
            <VideoCard  title='Netflix database structure' image ={Tumb2} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={NetImg}/>
            <VideoCard  title='How to bougth own new car' image ={Tumb3} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb3} />
            <VideoCard  title='Think different' image ={Tumb4} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb4}/>
            <VideoCard  title='How to use youtube' image ={Tumb1} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={YouImg}/>
            <VideoCard  title='Netflix database structure' image ={Tumb2} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={NetImg}/>
            <VideoCard  title='How to bougth own new car' image ={Tumb3} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb3} />
            <VideoCard  title='Think different' image ={Tumb4} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb4}/>
            <VideoCard  title='How to use youtube' image ={Tumb1} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={YouImg}/>
            <VideoCard  title='Netflix database structure' image ={Tumb2} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={NetImg}/>
            <VideoCard  title='How to bougth own new car' image ={Tumb3} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb3} />
            <VideoCard  title='Think different' image ={Tumb4} channel='Youtube' views='2.3M Views' timestaps='1 day ago' channelImage={Tumb4}/>
            
            <VideoCard />
            </div>
        </div>
    )
}

export default RecommentedVideos
