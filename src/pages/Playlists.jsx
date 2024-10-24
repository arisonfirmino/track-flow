import { useState, useEffect } from "react";
import Container from "../components/Container";
import apiClient from "../spotify";
import BackButton from "../components/BackButton";
import FeaturedPlaylists from "../components/FeaturedPlaylists";
import PlaylistItem from "../components/PlaylistItem";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>

      <div className="space-y-5">
        <div className="px-5 pt-5">
          <h2 className="text-2xl font-bold">Minhas Playlists</h2>
        </div>
        <div className="flex w-full gap-2.5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>

      <FeaturedPlaylists />
    </Container>
  );
};

export default Playlists;
