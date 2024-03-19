import React, { useContext } from "react";
import AudioPlayerCard from "../components/AudioPlayer/AudioPlayerCard";
import { DATA_CONTEXT } from "../provider/DataProvider";

const Home = () => {
  const { musicData } = useContext(DATA_CONTEXT);
  const { music, search } = musicData;

  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-4 mt-20">
        {search.length === 0
          ? music.map((item, index) => (
              <AudioPlayerCard key={index} data={item} />
            ))
          : search.map((item, index) => (
              <AudioPlayerCard key={index} data={item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
