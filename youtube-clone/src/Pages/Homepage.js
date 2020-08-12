import React from 'react';
import Header from '../Components/Header'
import SideBar from "../Components/SideBar";
import RecommentedVideos from "../Components/RecommentedVideos";
import './Homepage.css'

function HomePage() {
  return (
    <div className="app">
      
      {/* Header */}
      <Header />

      <div className='page-container'>
      {/* Sidebar */}
      <SideBar />
      {/* Recomended Video */}
      <RecommentedVideos />
      </div>

    </div>
  );
}

export default HomePage;
