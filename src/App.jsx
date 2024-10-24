import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import { setClientToken } from "./spotify";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Player from "./pages/Player";
import Album from "./pages/Album";
import Albums from "./pages/Albums";
import Artistis from "./pages/Artists";
import SavedTracks from "./pages/SavedTracks";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash) {
      token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", token);
      window.location.hash = "";
    }

    if (token) {
      setClientToken(token);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved-tracks" element={<SavedTracks />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/artists" element={<Artistis />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
