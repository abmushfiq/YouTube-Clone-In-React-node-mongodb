import React from 'react'
import SideBar from "../Components/SideBar";
import "./Search.css";

function SearchPage() {
    return (
        <div className='fullapp__searchpage__container'>
            <SideBar />
            <div className='searchpage__container'>
            <h1> hi from search</h1>
            </div>
        </div>
    )
}

export default SearchPage;
