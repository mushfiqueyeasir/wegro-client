import React from "react";
import AudioPlayer from "react-h5-audio-player";

const AudioPlayerCard = ({ data }) => {
  return (
    <article className="shadow rounded-lg overflow-hidden">
      <div>
        <img
          src={data.thumbnail}
          alt=""
          className="w-full h-[15rem] object-cover"
        />
      </div>
      <h1 className="text-xl font-bold py-4 px-2 min-h-[6rem]">{data.title}</h1>
      <AudioPlayer
        autoPlay={false}
        showSkipControls={false}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        hasDefaultKeyBindings={false}
        showFilledVolume={false}
        src={data.link}
        onPlay={(e) => console.log("onPlay")}
      />
    </article>
  );
};

export default AudioPlayerCard;
