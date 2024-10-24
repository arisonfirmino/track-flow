import { useEffect, useState } from "react";
import apiClient from "../spotify";
import PlaylistItem from "./PlaylistItem";

const FeaturedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient.get("/browse/featured-playlists").then((response) => {
      setPlaylists(response.data.playlists.items);
    });
  }, []);

  return (
    <div className="space-y-5">
      <div className="px-5 pt-5">
        <h2 className="text-2xl font-bold">Playlists Recomendadas</h2>
      </div>
      <div className="flex w-full gap-2.5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {playlists.map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPlaylists;
