import { useEffect, useState } from "react";
import apiClient from "../spotify";
import Container from "../components/Container";
import AlbumItem from "../components/AlbumItem";
import BackButton from "../components/BackButton";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    apiClient.get("/me/albums").then((response) => {
      setAlbums(response.data.items);
    });
  }, []);

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>

      <h2 className="mb-2.5 ml-5 mt-5 text-lg font-semibold text-primary">
        Álbuns Salvos
      </h2>
      <div className="flex w-full gap-2.5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {albums.map((album) => (
          <AlbumItem key={album.album.id} album={album.album} />
        ))}
      </div>
    </Container>
  );
};

export default Albums;
