import { useEffect, useState } from "react";
import apiClient from "../spotify";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import MusicItem from "../components/MusicItem";
import { LuHeart } from "react-icons/lu";

const SavedTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (hasMore) {
      apiClient
        .get("/me/tracks", {
          params: {
            limit: 50,
            offset: offset,
          },
        })
        .then((response) => {
          setTracks((prevTracks) => [...prevTracks, ...response.data.items]);
          setHasMore(response.data.next !== null);
          setOffset((prevOffset) => prevOffset + 50);
        })
        .catch((error) => {
          console.error("Error fetching saved tracks:", error);
        });
    }
  }, [offset, hasMore]);

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>

      <div className="flex flex-col items-center pt-5">
        <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-primary">
          <LuHeart size={112} />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-primary">
          Músicas Curtidas
        </h2>
      </div>

      <div className="flex flex-col gap-5 px-5 pt-5">
        {tracks.map((track, index) => (
          <MusicItem
            key={`${track.track.id}-${index}`}
            track={track.track}
            image={track.track.album.images[0].url}
          />
        ))}
      </div>
    </Container>
  );
};

export default SavedTracks;
