import {
  LuPlay,
  LuChevronsLeft,
  LuChevronsRight,
  LuPause,
} from "react-icons/lu";

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
      setIsPlaying(false);
    } else {
      playMusic();
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-5">
      <input
        type="range"
        min="0"
        max={audioRef.current ? audioRef.current.duration : 0}
        value={currentTime}
        onChange={handleProgressChange}
        className="mt-3 w-full"
      />
      <div className="flex items-center justify-between">
        <button>
          <LuChevronsLeft size={24} />
        </button>

        <button onClick={handlePlayPause}>
          {isPlaying ? <LuPause size={28} /> : <LuPlay size={28} />}
        </button>

        <button>
          <LuChevronsRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
