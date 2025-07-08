import { useRef, useEffect, useState } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume,
  Volume1,
  Volume2,
} from "lucide-react";

function Visualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(1);
  const [currentLength, setCurrentLength] = useState(0.0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekPosition, setSeekPosition] = useState(0.0);
  const [position, setPosition] = useState(0.0);

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
      return null;
    }
  };

  const onPlaying = () => {
    const duration = audioElem.current?.duration ?? 0;
    const currTime = audioElem.current?.currentTime ?? 0;
    setPosition(() => {
      if (Number.isNaN(duration)) {
        return 0;
      }
      return currTime / duration;
    });
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
  useEffect(() => {
    if (audioElem.current) {
      audioElem.current.load();
      if (isPlaying) {
        audioElem.current.play();
      }
      setCurrentLength(() => {
        const duration = audioElem.current?.duration ?? 0;
        return duration;
      });
    }
  }, [currentAudio]);

  useEffect(() => {
    if (!isSeeking) {
      setPosition(seekPosition);
      if (audioElem.current) {
        const duration = audioElem.current?.duration ?? 0;
        if (Number.isFinite(duration) && duration > 0) {
          //console.log(seekPosition * duration);
          audioElem.current.currentTime = seekPosition * duration;
          setPosition(seekPosition / duration);
        }
      }
    }
  }, [isSeeking]);

  return (
    <div className="w-full flex flex-col items-center">
      <audio src={getCurrentSong()} ref={audioElem} onTimeUpdate={onPlaying} />
      <div className="w-full">
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={position}
          onChange={(e) => {
            setSeekPosition(Number(e.target.value));
            setPosition(Number(e.target.value));
            setIsSeeking(true);
          }}
          onMouseUp={() => {
            setIsSeeking(false);
          }}
          onTouchEnd={() => {
            setIsSeeking(false);
          }}
          className="horizontal-slider w-full 
          volume-slider
          h-0.5 mb-4 bg-stone-900 rounded-lg appearance-none hover:h-2 transition-all duration-100 cursor-pointer range-sm dark:bg-emerald-300"
        ></input>
      </div>
      <div className="w-full flex flex-row items-center">
        {volume == 0 ? (
          <Volume />
        ) : volume > 0 && volume < 0.5 ? (
          <Volume1 />
        ) : (
          <Volume2 />
        )}
        <div className="px-5">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="horizontal-slider w-20 
          volume-slider
          h-0.5 mb-4 bg-stone-900 rounded-lg appearance-none cursor-pointer range-sm dark:bg-emerald-300"
          ></input>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <button
            className="btn btn-ghost btn-square hover:bg-emerald-300 hover:text-stone-900"
            onClick={() => {
              if (currentAudio !== 0) {
                setCurrentAudio(currentAudio - 1);
                setIsPlaying(true);
              }
            }}
          >
            <SkipBack />
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
              if (currentAudio !== audioFiles.length - 1) {
                setCurrentAudio(currentAudio + 1);
                setIsPlaying(true);
              }
            }}
          >
            <SkipForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visualizer;
