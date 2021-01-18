import React from 'react';
import './Videos.css';
import VideoCard from './VideoCard'; 

function Videos() {
    return (
        <div className="videos">
            <div className="videos-categories">
                <section className="videos__category-section">
                    <button className="videos__category active">All</button>
                    <button className="videos__category">HTML5</button>
                    <button className="videos__category">CSS3</button>
                    <button className="videos__category">Responsive Design</button>
                    <button className="videos__category">UX</button>
                    <button className="videos__category">JavaScript</button>
                    <button className="videos__category">ES6</button>
                    <button className="videos__category">Typescript</button>
                    <button className="videos__category">React</button>
                </section>
            </div>
            <h2>Recommendad Videos</h2>
            <div className="videos__videos">
                <VideoCard
                    title="Cup of Tea | CSS Animation"
                    views="7,911 views"
                    timestamp="1 Dec 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngFCKugZwen-81xq0K_0tSU6HQZsvjQ26xsQzO7zg=s88-c-k-c0x00ffffff-no-rj"
                    channel="Online Tutorials"
                    image="https://commons.wikimedia.org/wiki/Category:Animated_SVG#/media/File:AnimateColor_with_SVG.svg"
                />
                <VideoCard
                    title="Create Login Page in Figma"
                    views="28 views"
                    timestamp="29 Nov 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngS0Yuirc3JNT9Wyi2woGUiIbcSKIneeZAZM2610Q=s88-c-k-c0x00ffffff-no-rj"
                    channel="Geek Deelino"
                    image="https://en.wikipedia.org/wiki/Figma_(software)#/media/File:Figma-logo.svg"
                />
                <VideoCard
                    title="5 tips for Junior Developers"
                    views="29K views"
                    timestamp="30 june 2020"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhbDrzOoSOGjl4O-SO-SgJa2QT6tqokF0RLsQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Honeypot"
                    image="https://en.wikipedia.org/wiki/Programmer#/media/File:Two_women_operating_ENIAC_(full_resolution).jpg"
                />
                <VideoCard
                    title="React Tutorial For Beginners"
                    views="403K views"
                    timestamp="30 July 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Dev Ed"
                    image="https://en.wikipedia.org/wiki/React_(web_framework)#/media/File:React-icon.svg"
                />
                <VideoCard
                    title="A day in the life of a UX Designer"
                    views="201K views"
                    timestamp="10 Mar 2018"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngvqNWJ7gYhQ5QshFdSEHnjaSSJSdBnQltVvI1REQ=s88-c-k-c0x00ffffff-no-rj"
                    channel="chunbuns"
                    image="https://en.wikipedia.org/wiki/File:DesignThinking.ogv"
                />
                <VideoCard
                    title="VS Code on my Phone"
                    views="1,038 views"
                    timestamp="2 Dec 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Adrian Twarog"
                    image="https://en.wikipedia.org/wiki/Visual_Studio_Code#/media/File:VS_Code_(Insiders).png"
                />
                <VideoCard
                    title="Responsive Web Design"
                    views="5,3K views"
                    timestamp="29 Nov 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjp7T7bz_3yFeJWsLo8Pr2pTEVssg9qEYkJ84Ve=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Bedimcode"
                    image="https://en.wikipedia.org/wiki/Responsive_web_design#/media/File:Content-is-like-water.svg"
                />
                <VideoCard
                    title="¿Qué son las APIs y para qué sirven?"
                    views="575,233 views"
                    timestamp="5 Apr 2019"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="EDteam"
                    image="https://en.wikipedia.org/wiki/API#/media/File:Univac_1108_Census_Bureau.jpg"
                />
            </div>
            <hr/>
        </div>
    )
}

export default Videos;