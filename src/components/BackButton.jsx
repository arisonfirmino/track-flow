import { LuChevronLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-1 text-primary active:text-gray-400"
    >
      <LuChevronLeft size={20} />
      Voltar
    </button>
  );
};

export default BackButton;
