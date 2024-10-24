import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import apiClient from "../spotify";
import MusicPlayer from "../components/MusicPlayer";
import BackButton from "../components/BackButton";

const Player = () => {
  const { id } = useParams();

  const [music, setMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    apiClient.get(`/tracks/${id}`).then((response) => {
      setMusic(response.data);
    });
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false);
      };

      const updateTime = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("timeupdate", updateTime);

      return () => {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [music]);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <Container>
      <div className="px-5 pt-5">
        <BackButton />
      </div>
      {music && (
        <div className="flex flex-col items-center gap-5 px-5 pt-5">
          <img
            src={music.album.images[0].url}
            alt={music.name}
            className="w-full max-w-72 scale-[1.02] shadow-md"
          />
          <div className="w-full space-y-1">
            <h3 className="line-clamp-2 text-xl font-semibold text-primary">
              {music.name}
            </h3>
            <p className="text-sm text-foreground">{music.artists[0].name}</p>
          </div>
        </div>
      )}

      {music && music.preview_url && (
        <audio ref={audioRef} src={music.preview_url} />
      )}

      {music && music.preview_url ? (
        <div className="absolute bottom-10 w-full px-10">
          <MusicPlayer
            playMusic={playMusic}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            currentTime={currentTime}
            handleProgressChange={handleProgressChange}
          />
        </div>
      ) : (
        <div className="absolute bottom-10 flex w-full justify-center">
          <p className="text-sm text-red-600">
            Esta música não está disponível para reprodução.
          </p>
        </div>
      )}
    </Container>
  );
};

export default Player;
