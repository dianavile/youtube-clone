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
                    // image="https://i.ytimg.com/an_webp/_jOqYe0eFqY/mqdefault_6s.webp?du=3000&sqp=CP70ov4F&rs=AOn4CLAfkN-nyFm-2e6rxIOoqrw1vFBELA"
                />
                <VideoCard
                    title="Create Login Page in Figma"
                    views="28 views"
                    timestamp="29 Nov 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngS0Yuirc3JNT9Wyi2woGUiIbcSKIneeZAZM2610Q=s88-c-k-c0x00ffffff-no-rj"
                    channel="Geek Deelino"
                    // image="https://i.ytimg.com/an_webp/h0zMNxRIbMc/mqdefault_6s.webp?du=3000&sqp=CMOOo_4F&rs=AOn4CLBa8HfC_-Q9cpXiJoBUUz9yvR4aoA"
                />
                <VideoCard
                    title="5 tips for Junior Developers"
                    views="29K views"
                    timestamp="30 june 2020"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhbDrzOoSOGjl4O-SO-SgJa2QT6tqokF0RLsQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Honeypot"
                    // image="https://i.ytimg.com/an_webp/n18iJYxWy3w/mqdefault_6s.webp?du=3000&sqp=CLzpov4F&rs=AOn4CLAPX_Q72LMpSo28MvOyydmWLrUnYA"
                />
                <VideoCard
                    title="React Tutorial For Beginners"
                    views="403K views"
                    timestamp="30 July 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Dev Ed"
                    // image="https://i.ytimg.com/an_webp/dGcsHMXbSOA/mqdefault_6s.webp?du=3000&sqp=CPCXo_4F&rs=AOn4CLAn_eJELRnPTwwNcAirIR95klBZ1Q"
                />
                <VideoCard
                    title="A day in the life of a UX Designer"
                    views="201K views"
                    timestamp="10 Mar 2018"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngvqNWJ7gYhQ5QshFdSEHnjaSSJSdBnQltVvI1REQ=s88-c-k-c0x00ffffff-no-rj"
                    channel="chunbuns"
                    // image="https://i.ytimg.com/an_webp/Ecmg8nsRKlM/mqdefault_6s.webp?du=3000&sqp=CKzlov4F&rs=AOn4CLCK8PixxT2T2ECbXShRcn7q163W4w"
                />
                <VideoCard
                    title="VS Code on my Phone"
                    views="1,038 views"
                    timestamp="2 Dec 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Adrian Twarog"
                    // image="https://i.ytimg.com/an_webp/UFxVvrrufsA/mqdefault_6s.webp?du=3000&sqp=CPCXo_4F&rs=AOn4CLBfem1DicR3ML59E3oqdZVSWW0avw"
                />
                <VideoCard
                    title="Responsive Web Design"
                    views="5,3K views"
                    timestamp="29 Nov 2020"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjp7T7bz_3yFeJWsLo8Pr2pTEVssg9qEYkJ84Ve=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="Bedimcode"
                    // image="https://i.ytimg.com/an_webp/5RIFrZEjURA/mqdefault_6s.webp?du=3000&sqp=CICHo_4F&rs=AOn4CLCu-sgtx0Ay9y_Jfe22nIiBY40lxw"
                />
                <VideoCard
                    title="¿Qué son las APIs y para qué sirven?"
                    views="575,233 views"
                    timestamp="5 Apr 2019"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="EDteam"
                    // image="https://i.ytimg.com/an_webp/u2Ms34GE14U/mqdefault_6s.webp?du=3000&sqp=CPKSo_4F&rs=AOn4CLDllOGK2Q8zWl8egOBrVnmXfK_VPQ"
                />
            </div>
            <hr/>
        </div>
    )
}

export default Videos;