import { useRef } from "react";

export const AudioControls = ({
  showControls = true,
  song,
  prevSong,
  nextSong,
  prevDisabled,
  nextDisabled
}) => {
  const { audioUrl } = song;
  const audioRef = useRef();
  return (
    <>
      <audio key={audioUrl} ref={audioRef} controls={showControls}>
        <source src={audioUrl} />
      </audio>

      <div className="control-box">
        <button
          onClick={() => prevSong()}
          className={!prevDisabled ? "" : "disabled"}
        >
          &lt;&lt;
        </button>

        <button
          onClick={() => nextSong()}
          className={!nextDisabled ? "" : "disabled"}
        >
          &gt;&gt;
        </button>

        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </>
  );
};
