import React, { useEffect, useState } from "react";
import "./style.module.css";
function YouTubeVedio() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyCBErFdSPoxb-ubqE8O1Jfi4FI9GbEEU5I"
    )
      .then((response) => response.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      })
      .catch((err) => console.log("error:unable to fecth data"));
  }, []);
  console.log(youTubeVideos);
  return (
    <section className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper video-title-wrapper">
              <br />
              Latest Videos <br />
              <br />
            </div>
          </div>

          {youTubeVideos?.map((singleVedio, i) => {
            let vidId = singleVedio.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className=" col-sm-12 col-md-6 col-lg-4 ">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVedio.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>

                  <div className="videoInfoWrapper">
                    <div className="vidoeTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVedio.snippet.title}
                      </a>
                    </div>

                    <div className="videoDesc">
                      {singleVedio.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YouTubeVedio;
