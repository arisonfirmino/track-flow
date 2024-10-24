import { Link } from "react-router-dom";

const AlbumItem = ({ album }) => {
  return (
    <ul className="min-w-32 max-w-32">
      <Link to={`/album/${album.id}`}>
        <li className="relative rounded-lg bg-white bg-opacity-10 p-1">
          <img
            src={album.images[0].url}
            alt={album.name}
            className="w-full rounded-lg"
          />

          <h3 className="w-full truncate text-base font-medium">
            {album.name}
          </h3>
          <p className="truncate text-xs text-foreground">
            {album.artists[0].name}
          </p>
        </li>
      </Link>
    </ul>
  );
};

export default AlbumItem;
