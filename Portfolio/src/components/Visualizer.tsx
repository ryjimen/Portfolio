import { useRef, useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

function Visualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const audioElem = useRef<HTMLAudioElement | null>(null);

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (audioElem.current) {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioElem.current) {
      audioElem.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="w-full flex flex-row items-center">
      <audio src="/audio/AsianRock-Crmnl[@va1encia].mp3" ref={audioElem} />
      <div className="px-5">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="horizontal-slider w-20 
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:w-3
          [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-emerald-400 
          h-0.5 mb-4 bg-stone-900 rounded-lg appearance-none cursor-pointer range-sm dark:bg-emerald-300"
        ></input>
      </div>
      <button
        className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900"
        onClick={playPause}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>
  );
}

export default Visualizer;
