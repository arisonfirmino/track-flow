import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { LuUser } from "react-icons/lu";
import apiClient from "../spotify";

const Header = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <SiSpotify size={24} />
        <h2 className="text-2xl font-bold">Biblioteca</h2>
      </div>

      <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
        {image ? (
          <img src={image} alt="Usuário" className="h-full w-full" />
        ) : (
          <LuUser />
        )}
      </button>
    </header>
  );
};

export default Header;
