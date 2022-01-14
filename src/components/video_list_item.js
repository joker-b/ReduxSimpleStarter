import React from "react";

const VideoListItem = (props) => {
    return (
        <li className="list-group-item">
            Video {props.video.snippet.title}
        </li>
    );
};

export default VideoListItem;