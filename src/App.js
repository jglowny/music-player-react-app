import "./styles.css";
import { useEffect, useState } from "react";
import { AudioControls } from "./AudioControls";
import { Songs } from "./Songs";
import { Cover } from "./Cover";
import { Heading } from "./Heading";

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSong] = useState([]);

  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSong);
      }
    });
  }, []);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [currentSong, setCurrentSong] = useState(songs[currentSongIndex]);
  const currentSong = songs[currentSongIndex];
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const selectSong = (audioSrc) => {
    const findSong = songs.findIndex((el) => el.audioUrl === audioSrc);
    if (findSong > -1) {
      setCurrentSongIndex(findSong);
    }
  };

  useEffect(() => {
    if (currentSongIndex === 0) {
      return setPrevDisabled(true);
    }
    if (!songs[currentSongIndex + 1]) {
      return setNextDisabled(true);
    }
    setPrevDisabled(false);
    setNextDisabled(false);
  }, [songs, currentSongIndex]);

  const nextSong = () => {
    if (songs[currentSongIndex + 1]) {
      setCurrentSongIndex((prev) => prev + 1);
    }
  };

  const prevSong = () => {
    if (songs[currentSongIndex - 1]) {
      setCurrentSongIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <Heading className="heading" />
      {songs.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <section className="song-player">
            <Cover className="cover" image={currentSong?.coverUrl} />
            <AudioControls
              className="audio-controls"
              song={currentSong}
              prevSong={prevSong}
              nextSong={nextSong}
              prevDisabled={prevDisabled}
              nextDisabled={nextDisabled}
            />
          </section>
          <section className="songs">
            <Songs
              selectSong={selectSong}
              songs={songs}
              current={currentSong?.audioUrl}
            />
          </section>
        </>
      )}
    </div>
  );
}
