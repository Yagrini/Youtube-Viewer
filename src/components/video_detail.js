import React from 'react';

const VideoDetail = (props) => {
  const video = props.video;
  if(!video) return <div>LOADING......</div>;
  const id = video.id.videoId;
  const url = 'https://www.youtube.com/embed/'+id;
  return (
      <div className="video_detail col-md-8">
        <div className=" embed-responsive embed-responsive-16by9" id="video">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div id="title">{video.snippet.title}</div>
          <div id="desc">{video.snippet.description}</div>
        </div>
      </div>
  );
}

export default VideoDetail;
