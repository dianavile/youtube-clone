import React from 'react';
import './Videos.css';
import VideoCard from './VideoCard'; 

function Videos() {
    return (
        <div className="videos">
            <h1>Videos</h1>
            <div className="videos__videos"></div>
            <VideoCard
                title="Animated Hot Cup of Tea | CSS Animation"
                views="7,911 views"
                timestamp="1 Dec 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngFCKugZwen-81xq0K_0tSU6HQZsvjQ26xsQzO7zg=s88-c-k-c0x00ffffff-no-rj"
                channel="Online Tutorials"
                image="#"
            />
            <VideoCard
                title="How to Create Simple Login Page in Figma"
                views="28 views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngS0Yuirc3JNT9Wyi2woGUiIbcSKIneeZAZM2610Q=s88-c-k-c0x00ffffff-no-rj"
                channel="Geek Deelino"
                image="#"
            />
           <VideoCard
                title="A Day with a Berlin Developer | Dev Cities"
                views="198 views"
                timestamp="30 june 2020"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhbDrzOoSOGjl4O-SO-SgJa2QT6tqokF0RLsQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Honeypot"
                image="#"
            />
            <VideoCard
                title="React Tutorial For Beginners"
                views="403K views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Dev Ed"
                image="#"
            />
           <VideoCard
                title="A day in the life of a UX Designer | San Francisco"
                views="201K views"
                timestamp="10 Mar 2018"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngvqNWJ7gYhQ5QshFdSEHnjaSSJSdBnQltVvI1REQ=s88-c-k-c0x00ffffff-no-rj"
                channel="chunbuns"
                image="#"
            />
            <VideoCard
                title="VS Code on my Phone for Website Dev...(How I did it)"
                views="1,038 views"
                timestamp="2 Dec 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Adrian Twarog"
                image="#"
            />
            <VideoCard
                title="Responsive Landing Page | Responsive Web Design"
                views="8,502 views"
                timestamp="29 Nov 2020"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnjp7T7bz_3yFeJWsLo8Pr2pTEVssg9qEYkJ84Ve=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Bedimcode"
                image="#"
            />
            <VideoCard
                title="¿Qué son las APIs y para qué sirven?"
                views="575,233 views"
                timestamp="5 Apr 2019"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s48-c-k-c0xffffffff-no-rj-mo"
                channel="EDteam"
                image="#"
            />
            <hr />
            <h2>Recommended Videos</h2>
            {/* TODO: add new video__info */}
        </div>
    )
}

export default Videos;