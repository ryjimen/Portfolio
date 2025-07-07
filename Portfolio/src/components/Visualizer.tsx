import { useRef, useEffect, useState, useMemo } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

function Visualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(1);
  const audioElem = useRef<HTMLAudioElement | null>(null);

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const getCurrentSong = () => {
    if (!audioFiles) return "";
    const song = audioFiles.find((_, index) => index === currentAudio);
    if (song) {
      return `/audio/${song["name"]}`;
    } else {
      return "";
    }
  };

  //Play Pause
  useEffect(() => {
    if (audioElem.current) {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [isPlaying]);

  //Volume Change
  useEffect(() => {
    if (audioElem.current) {
      audioElem.current.volume = volume;
    }
  }, [volume]);

  //Get audio files on page load
  useEffect(() => {
    fetch("audioManifest.json")
      .then((res) => res.json())
      .then((files) => {
        setAudioFiles(files);
        console.log(files);
      });
  }, []);

  //Current playing song
  useEffect(() => {}, []);

  if (!audioFiles) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full flex flex-row items-center">
      <audio src={getCurrentSong()} ref={audioElem} />
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
      <div className="absolute left-1/2 -translate-x-1/2">
        <button
          className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900"
          onClick={() => {
            const current = currentAudio;
            if (current != 0) {
              setCurrentAudio(current - 1);
              setIsPlaying(true);
            }
          }}
        >
          {isPlaying ? <SkipBack /> : <SkipBack />}
        </button>
        <button
          className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900"
          onClick={playPause}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button
          className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900"
          onClick={() => {
            const current = currentAudio;
            if (current != audioFiles.length - 1) {
              setCurrentAudio(current + 1);
              setIsPlaying(true);
            }
          }}
        >
          <SkipForward />
        </button>
      </div>
    </div>
  );
}

export default Visualizer;
