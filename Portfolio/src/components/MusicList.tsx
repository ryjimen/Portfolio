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
    <>
      {props.audioFiles.map((file, index) => {
        if (props.Selected === index)
          return (
            <button
              className="text-blue-500"
              onClick={() => selectSongByIndex(index)}
            >
              {file["name"]}
            </button>
          );
        else {
          return <button className="" onClick={() => selectSongByIndex(index)}>{file["name"]}</button>;
        }
      })}
    </>
  );
}

export default MusicList;
