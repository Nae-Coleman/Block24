import "./shows.css";

/** Allows users to browse through the episodes of the given show */

import EpisodeList from "../episodes/EpisodeList";

export default function ShowDetails({ show, setSelectedEpisode }) {
  if (!show) {
    // if no show is selected yet
    return null;
  }

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <p>{show.genre}</p>
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
      />
    </div>
  );
}
