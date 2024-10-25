import { LuPlayCircle, LuPauseCircle } from "react-icons/lu";

const MusicPlayer = ({
  playMusic,
  isPlaying,
  setIsPlaying,
  audioRef,
  handleProgressChange,
  currentTime,
}) => {
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playMusic();
      setIsPlaying(true);
    }
  };

  const progressPercentage = audioRef.current
    ? (currentTime / audioRef.current.duration) * 100
    : 0;

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={handlePlayPause}
        className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-primary"
      >
        {isPlaying ? <LuPauseCircle size={24} /> : <LuPlayCircle size={24} />}
      </button>

      <input
        type="range"
        min="0"
        max={audioRef.current ? audioRef.current.duration : 0}
        value={currentTime}
        onChange={handleProgressChange}
        className="h-1 w-full appearance-none rounded-full"
        style={{
          background: `linear-gradient(to right, var(--primary) ${progressPercentage}%, var(--foreground) ${progressPercentage}%)`,
        }}
      />
    </div>
  );
};

export default MusicPlayer;
