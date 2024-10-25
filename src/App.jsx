import { useEffect, useState } from "react";
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
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let _token = window.localStorage.getItem("token");
    const tokenTimestamp = window.localStorage.getItem("token_timestamp");
    const currentTime = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;

    const handleLogout = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("token_timestamp");
      setToken("");
      navigate("/login");
    };

    if (!_token && hash) {
      _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      window.localStorage.setItem("token_timestamp", Date.now());
      setToken(_token);
      setClientToken(_token);
      window.location.hash = "";
    } else if (_token) {
      setToken(_token);
      setClientToken(_token);

      if (currentTime - tokenTimestamp > thirtyMinutes) {
        handleLogout();
      } else {
        const remainingTime = thirtyMinutes - (currentTime - tokenTimestamp);

        const timeout = setTimeout(handleLogout, remainingTime);

        return () => clearTimeout(timeout);
      }
    }
  }, [navigate]);

  return !token ? (
    <Login />
  ) : (
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
