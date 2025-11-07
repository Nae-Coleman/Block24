import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="show-selection">
      <ul>
        {shows.map((show, index) => (
          <li
            key={index}
            className="show-item"
            onClick={() => setSelectedShow(show)}
          >
            {show.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

//<ShowSelection> will:
//Take two props:
//shows → the list of all shows (from your data.js)
//setSelectedShow → a function that updates which show is chosen
//Loop through (map) each show in the list
//Display each show’s title as a button or list item
//When you click a title, it calls setSelectedShow(show)
