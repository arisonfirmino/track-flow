import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import { setClientToken } from "./spotify";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Player from "./pages/Player";
import Album from "./pages/Album";
import Artistis from "./pages/Artists";
import SavedTracks from "./pages/SavedTracks";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    const handleLogout = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("token_timestamp");
      navigate("/login");
    };

    if (hash) {
      token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("token_timestamp", Date.now());
      window.location.hash = "";
    }

    if (token) {
      const tokenTimestamp = window.localStorage.getItem("token_timestamp");
      const currentTime = Date.now();
      const thirtyMinutes = 30 * 60 * 1000;

      if (currentTime - tokenTimestamp > thirtyMinutes) {
        handleLogout();
      } else {
        setClientToken(token);

        const timeout = setTimeout(
          () => {
            handleLogout();
          },
          thirtyMinutes - (currentTime - tokenTimestamp),
        );

        return () => clearTimeout(timeout);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/track-flow" element={<Home />} />
      <Route path="/saved-tracks" element={<SavedTracks />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/artists" element={<Artistis />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
