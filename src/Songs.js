export const Songs = ({ songs, selectSong, current }) => {
  const handleClick = (audioUrl) => {
    selectSong(audioUrl);
  };

  return (
    <ul>
      <h1 style={{ textAlign: "center" }}>Songs</h1>
      {songs.map(({ title, artist, audioUrl }) => (
        <li
          key={audioUrl}
          onClick={() => handleClick(audioUrl)}
          className={current === audioUrl ? "active" : null}
        >
          <p className="title">Title: {title}</p>
          <p className="artist">Artist: {artist}</p>
        </li>
      ))}
    </ul>
  );
};
