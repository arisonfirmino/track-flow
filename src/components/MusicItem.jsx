import { LuPlay } from "react-icons/lu";
import formatDuration from "../helpers/formatDuration";
import { Link } from "react-router-dom";

const MusicItem = ({ track, image }) => {
  return (
    <Link to={`/player/${track.id}`}>
      <ul>
        <li className="group relative flex items-center gap-2.5 rounded-lg bg-white bg-opacity-10 p-1 duration-500 hover:scale-105">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-primary">
            <img
              src={image}
              alt={track.name}
              className="h-full group-hover:hidden"
            />
            <span className="hidden group-hover:flex">
              <LuPlay size={20} />
            </span>
          </div>

          <div className="overflow-hidden">
            <h3 className="truncate font-medium text-primary">{track.name}</h3>
            <p className="truncate text-sm text-foreground">
              {track.artists[0].name}
            </p>
          </div>
          <span className="absolute bottom-1.5 right-2.5 text-xs text-foreground">
            {formatDuration(track.duration_ms)}
          </span>
        </li>
      </ul>
    </Link>
  );
};

export default MusicItem;
