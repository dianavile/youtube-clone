import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="SearchPage">
            <h2>Search</h2>
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            
            {/* <ChannelRow/> */}
            {/* <VideoRow /> */}
        </div>
    );
}

export default SearchPage;
