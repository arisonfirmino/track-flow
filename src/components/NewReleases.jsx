import { useEffect, useState } from "react";
import apiClient from "../spotify";
import { LuDisc2, LuGalleryVerticalEnd, LuMic2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    apiClient.get("/browse/new-releases").then((response) => {
      setNewReleases(response.data.albums.items);
    });
  }, []);

  return (
    <div className="space-y-2.5">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-primary">
          Novos Lançamentos
        </h2>
      </div>

      <div className="flex w-full gap-2.5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {newReleases.map((realeases) => (
          <ul key={realeases.id} className="min-w-32 max-w-32">
            <Link to={`/album/${realeases.id}`}>
              <li className="relative rounded-lg bg-white bg-opacity-10 p-1">
                <img
                  src={realeases.images[2].url}
                  alt={realeases.name}
                  className="w-full rounded-lg"
                />

                <h3 className="w-full truncate text-base font-medium">
                  {realeases.name}
                </h3>
                <p className="truncate text-xs text-foreground">
                  {realeases.artists[0].name}
                </p>

                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                  {realeases.album_type === "album" && (
                    <LuGalleryVerticalEnd size={12} />
                  )}
                  {realeases.album_type === "single" && <LuMic2 size={12} />}
                  {realeases.album_type === "ep" && <LuDisc2 size={12} />}
                </div>
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
