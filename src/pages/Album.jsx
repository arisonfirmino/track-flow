import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import apiClient from "../spotify";
import MusicItem from "../components/MusicItem";
import BackButton from "../components/BackButton";

const Album = () => {
  const { id } = useParams();

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    apiClient.get(`/albums/${id}`).then((response) => {
      setAlbum(response.data);
    });
  }, [id]);

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>
      {album && (
        <div className="space-y-5 px-5 py-5">
          <div className="flex flex-col items-center">
            <img
              src={album.images[0].url}
              alt={album.name}
              className="w-60 rounded-xl"
            />

            <h2 className="mt-5 text-2xl font-bold text-primary">
              {album.name}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-foreground">
              {album.description}
            </p>
            <span className="text-sm text-foreground">
              {album.artists[0].name}
            </span>
          </div>

          {album.tracks.items.map((track) => (
            <ul key={track.id}>
              <MusicItem track={track} image={album.images[0].url} />
            </ul>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Album;
