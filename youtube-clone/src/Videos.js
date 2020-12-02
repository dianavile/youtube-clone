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
                image="https://i.ytimg.com/an_webp/_jOqYe0eFqY/mqdefault_6s.webp?du=3000&sqp=CPj6nf4F&rs=AOn4CLCLmW_UQbwz4hxP1XrnNrrnuXWVpw"
            />
            <VideoCard
                title="How to Create Simple Login Page in Figma"
                views="28 views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngS0Yuirc3JNT9Wyi2woGUiIbcSKIneeZAZM2610Q=s88-c-k-c0x00ffffff-no-rj"
                channel="Geek Deelino"
                image="https://i.ytimg.com/an_webp/h0zMNxRIbMc/mqdefault_6s.webp?du=3000&sqp=CMbinf4F&rs=AOn4CLB9O8zMQxsS_nYRrpsFS-hjYHE2YA"
            />
           <VideoCard
                title="A Day with a Berlin Developer | Dev Cities"
                views="198 views"
                timestamp="30 june 2020"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhbDrzOoSOGjl4O-SO-SgJa2QT6tqokF0RLsQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Honeypot"
                image="https://i.ytimg.com/an_webp/H6tLIfPJm2w/mqdefault_6s.webp?du=3000&sqp=CPC0nv4F&rs=AOn4CLDkD6VsK0PSc8wEIaDFBQq2F8tZTQ"
            />
            <VideoCard
                title="React Tutorial For Beginners"
                views="403K views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Dev Ed"
                image="https://i.ytimg.com/an_webp/dGcsHMXbSOA/mqdefault_6s.webp?du=3000&sqp=CLDWnv4F&rs=AOn4CLAiesLpFz31v_cCBaDbSh-ijf3sgg"
            />
           <VideoCard
                title="A day in the life of a UX Designer | San Francisco"
                views="201K views"
                timestamp="10 Mar 2018"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngvqNWJ7gYhQ5QshFdSEHnjaSSJSdBnQltVvI1REQ=s88-c-k-c0x00ffffff-no-rj"
                channel="chunbuns"
                image="https://i.ytimg.com/an_webp/Ecmg8nsRKlM/mqdefault_6s.webp?du=3000&sqp=CIHjnv4F&rs=AOn4CLDYaj_we3jj9s0I7ynZ5pD_0IrMyQ"
            />
            <VideoCard
                title="VS Code on my Phone for Website Dev...(How I did it)"
                views="1,038 views"
                timestamp="2 Dec 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Adrian Twarog"
                image="https://i.ytimg.com/an_webp/UFxVvrrufsA/mqdefault_6s.webp?du=3000&sqp=CLDWnv4F&rs=AOn4CLDtZcX4tWhlHOGCSYssE-PwIPQ4jA"
            />
            <VideoCard
                title="Responsive Landing Page | Responsive Web Design"
                views="8,502 views"
                timestamp="29 Nov 2020"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnjp7T7bz_3yFeJWsLo8Pr2pTEVssg9qEYkJ84Ve=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Bedimcode"
                image="https://i.ytimg.com/an_webp/Lf6zONwYeec/mqdefault_6s.webp?du=3000&sqp=CIDgnv4F&rs=AOn4CLC0Btf1uEMU9hJUmj6-XBuo3nSxnw"
            />
            <VideoCard
                title="¿Qué son las APIs y para qué sirven?"
                views="575,233 views"
                timestamp="5 Apr 2019"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s48-c-k-c0xffffffff-no-rj-mo"
                channel="EDteam"
                image="https://i.ytimg.com/an_webp/u2Ms34GE14U/mqdefault_6s.webp?du=3000&sqp=COzlnv4F&rs=AOn4CLCo2LwZub0RMNN0NYhT75sd0JN8WQ"
            />
            <hr />
            <h2>Recommended Videos</h2>
            {/* TODO: add new video__info */}
            <VideoCard
                title="Animated Hot Cup of Tea | CSS Animation"
                views="7,911 views"
                timestamp="1 Dec 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngFCKugZwen-81xq0K_0tSU6HQZsvjQ26xsQzO7zg=s88-c-k-c0x00ffffff-no-rj"
                channel="Online Tutorials"
                image="https://i.ytimg.com/an_webp/_jOqYe0eFqY/mqdefault_6s.webp?du=3000&sqp=CPj6nf4F&rs=AOn4CLCLmW_UQbwz4hxP1XrnNrrnuXWVpw"
            />
            <VideoCard
                title="How to Create Simple Login Page in Figma"
                views="28 views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngS0Yuirc3JNT9Wyi2woGUiIbcSKIneeZAZM2610Q=s88-c-k-c0x00ffffff-no-rj"
                channel="Geek Deelino"
                image="https://i.ytimg.com/an_webp/h0zMNxRIbMc/mqdefault_6s.webp?du=3000&sqp=CMbinf4F&rs=AOn4CLB9O8zMQxsS_nYRrpsFS-hjYHE2YA"
            />
           <VideoCard
                title="A Day with a Berlin Developer | Dev Cities"
                views="198 views"
                timestamp="30 june 2020"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhbDrzOoSOGjl4O-SO-SgJa2QT6tqokF0RLsQ=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Honeypot"
                image="https://i.ytimg.com/an_webp/H6tLIfPJm2w/mqdefault_6s.webp?du=3000&sqp=CPC0nv4F&rs=AOn4CLDkD6VsK0PSc8wEIaDFBQq2F8tZTQ"
            />
            <VideoCard
                title="React Tutorial For Beginners"
                views="403K views"
                timestamp="29 Nov 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Dev Ed"
                image="https://i.ytimg.com/an_webp/dGcsHMXbSOA/mqdefault_6s.webp?du=3000&sqp=CLDWnv4F&rs=AOn4CLAiesLpFz31v_cCBaDbSh-ijf3sgg"
            />
           <VideoCard
                title="A day in the life of a UX Designer | San Francisco"
                views="201K views"
                timestamp="10 Mar 2018"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngvqNWJ7gYhQ5QshFdSEHnjaSSJSdBnQltVvI1REQ=s88-c-k-c0x00ffffff-no-rj"
                channel="chunbuns"
                image="https://i.ytimg.com/an_webp/Ecmg8nsRKlM/mqdefault_6s.webp?du=3000&sqp=CIHjnv4F&rs=AOn4CLDYaj_we3jj9s0I7ynZ5pD_0IrMyQ"
            />
            <VideoCard
                title="VS Code on my Phone for Website Dev...(How I did it)"
                views="1,038 views"
                timestamp="2 Dec 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Adrian Twarog"
                image="https://i.ytimg.com/an_webp/UFxVvrrufsA/mqdefault_6s.webp?du=3000&sqp=CLDWnv4F&rs=AOn4CLDtZcX4tWhlHOGCSYssE-PwIPQ4jA"
            />
            <VideoCard
                title="Responsive Landing Page | Responsive Web Design"
                views="8,502 views"
                timestamp="29 Nov 2020"
               channelImage="https://yt3.ggpht.com/ytc/AAUvwnjp7T7bz_3yFeJWsLo8Pr2pTEVssg9qEYkJ84Ve=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Bedimcode"
                image="https://i.ytimg.com/an_webp/Lf6zONwYeec/mqdefault_6s.webp?du=3000&sqp=CIDgnv4F&rs=AOn4CLC0Btf1uEMU9hJUmj6-XBuo3nSxnw"
            />
            <VideoCard
                title="¿Qué son las APIs y para qué sirven?"
                views="575,233 views"
                timestamp="5 Apr 2019"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s48-c-k-c0xffffffff-no-rj-mo"
                channel="EDteam"
                image="https://i.ytimg.com/an_webp/u2Ms34GE14U/mqdefault_6s.webp?du=3000&sqp=COzlnv4F&rs=AOn4CLCo2LwZub0RMNN0NYhT75sd0JN8WQ"
            />
        </div>
    )
}

export default Videos;