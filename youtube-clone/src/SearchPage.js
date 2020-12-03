import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="SearchPage">
            <h2>Search</h2>
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwngFCKugZwen-81xq0K_0tSU6HQZsvjQ26xsQzO7zg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Online Tutorials"
                verified
                subs="402K"
                noOfVideos={1.566}
                description="Online Tutorials is a channnel for learning Compolete responsive website design,Creative CSS animation and Hover Effects, Amazing Vanilla Javascript projects, ..."
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Enroll in My Course: Next Level CSS Animation and Hover Effects..."
                timestamp="47 min ago"
                channel="Online Tutorials"
                title="Creative List Item Hover Effect"
                image="https://i.ytimg.com/an_webp/nDQSlQRKANc/mqdefault_6s.webp?du=3000&sqp=CJXIo_4F&rs=AOn4CLBB7WWlPfJBkmWMXVn8omALdLCKdg"
            />   
            <VideoRow
                views="91K"
                subs="659K"
                description="In this episode we are going to be using Figma to create s imple web UI Design based on a laptop...."
                timestamp="1 year ago"
                channel="Dev Ed"
                title="Laptop Web UI Design Tutorial"
                image="https://i.ytimg.com/an_webp/E1GDVMAwdN4/mqdefault_6s.webp?du=3000&sqp=CIqQpP4F&rs=AOn4CLDjAmXz6MiU-Wkc9JoUJfJTSXvMgw"
            />      
            <VideoRow
                views="11K"
                subs="659K"
                description="Enroll in My Course: Next Level CSS Animation and Hover Effects..."
                timestamp="4 weeks ago"
                channel="Online Tutorials"
                title="Complete Responsive Login Form"
                image="https://i.ytimg.com/an_webp/mSAEGEAnyIY/mqdefault_6s.webp?du=3000&sqp=CKSDpP4F&rs=AOn4CLC8GwjqUco9svieB2flmAI0GGPOaA"
            />      
            <VideoRow
                views="89K views"
                subs="659K"
                description="Enroll in My Course: Next Level CSS Animation and Hover Effects..."
                timestamp="3 months ago"
                channel="Online Tutorials"
                title="Build a Complete Responsive Portfolio"
                image="https://i.ytimg.com/an_webp/UnlXPMKB-wE/mqdefault_6s.webp?du=3000&sqp=CPrLo_4F&rs=AOn4CLDnmWbQ2fZE5trTZ_ca1Vda2uPyaA"
            />         
        </div>
    );
}

export default SearchPage;
