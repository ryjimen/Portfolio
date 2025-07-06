import { useRef, useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

function Visualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
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
      audioElem.current.volume =  volume
    }
  }, [volume])

  return (
    <div>
      <audio src="/audio/AsianRock-Crmnl[@va1encia].mp3" ref={audioElem} />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => 
          setVolume(Number(e.target.value))
        }
        className="vertical-slider w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      ></input>
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
