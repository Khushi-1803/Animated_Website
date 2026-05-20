import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full bg-red-500">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source
          src="/animation_video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;


