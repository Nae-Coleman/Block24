/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import EpisodeDetails from "./episodes/EpisodeDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <hr />
      <main className="main">
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />

        <ShowDetails
          show={selectedShow}
          setSelectedEpisode={setSelectedEpisode}
        />

        {selectedEpisode && <EpisodeDetails episode={selectedEpisode} />}
      </main>
    </>
  );
}
//shows comes from your data.js file — that’s where all the show info is stored.
//selectedShow starts out as null (meaning nothing picked yet).
//setSelectedShow will let you update that when the user picks a show.
//<ShowSelection> will display a list of shows to pick from.
//ShowDetails> will display the details of whichever show was clicked.
