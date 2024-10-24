import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import apiClient from "../spotify";
import MusicItem from "../components/MusicItem";
import BackButton from "../components/BackButton";

const Album = () => {
  const { id } = useParams();

  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    apiClient.get(`/playlists/${id}`).then((response) => {
      setPlaylist(response.data);
    });
  }, [id]);

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>
      {playlist && (
        <div className="space-y-5 px-5 py-5">
          <div className="flex flex-col items-center">
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              className="w-60 rounded-xl"
            />

            <h2 className="mt-5 text-2xl font-bold text-primary">
              {playlist.name}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-foreground">
              {playlist.description}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {playlist.tracks.items.map((track) => (
              <MusicItem
                key={track.track.id}
                track={track.track}
                image={track.track.album.images[0].url}
              />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Album;
