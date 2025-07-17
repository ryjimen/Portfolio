interface AudioFile {
  name: string;
}

interface Props {
  Selected: number;
  selectCallback: any;
  audioFiles: AudioFile[];
}

function MusicList(props: Props) {
  const selectSongByIndex = (index: number) => {
    props.selectCallback(index);
  };

  return (
    <div className="flex flex-col glass-card m-5 px-7 py-5 w-full ubuntu">
      {props.audioFiles.map((file, index) => {
        if (props.Selected === index)
          return (
            <button
              className="text-xl bg-emerald-300 text-black border-b-2 white rounded-md"
              onClick={() => selectSongByIndex(index)}
            >
              {file["name"].replace(".mp3", "")}
            </button>
          );
        else {
          return (
            <button className="text-l" onClick={() => selectSongByIndex(index)}>
              {file["name"].replace(".mp3", "")}
            </button>
          );
        }
      })}
    </div>
  );
}

export default MusicList;
