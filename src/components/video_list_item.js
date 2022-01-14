import React from "react";

const VideoListItem = (video) => {
    console.log(video);
    const imgUrl = "http://placekitten.com/80/64"; // video.snippet.thumbnails.default.url;
    const title = "Title"; // video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-right">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;