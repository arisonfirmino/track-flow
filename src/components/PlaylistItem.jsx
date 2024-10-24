import { Link } from "react-router-dom";

const PlaylistItem = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist.id}`}>
      <ul className="min-w-32 max-w-32">
        <li className="rounded-lg bg-white bg-opacity-10 p-1">
          <img
            src={playlist.images[0].url}
            alt={playlist.name}
            className="h-full w-full rounded-lg"
          />
          <h3 className="truncate font-medium">{playlist.name}</h3>
          <p className="truncate text-sm text-foreground">
            {playlist.description}
          </p>
          <span className="text-xs text-primary">
            {playlist.tracks.total} músicas
          </span>
        </li>
      </ul>
    </Link>
  );
};

export default PlaylistItem;
