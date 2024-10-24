import { SiSpotify } from "react-icons/si";
import Container from "../components/Container";
import { loginEndpoint } from "../spotify";

const Login = () => {
  return (
    <Container>
      <div className="flex h-full flex-col items-center justify-center gap-20 px-5 pt-64 md:pt-0">
        <div className="flex flex-col items-center gap-5">
          <SiSpotify size={48} />
          <span className="text-2xl font-bold">Entrar no Spotify</span>
        </div>

        <a
          href={loginEndpoint}
          className="flex w-full items-center justify-between rounded-full border border-solid border-white px-5 py-2.5"
        >
          Entrar
          <SiSpotify size={16} className="text-primary" />
        </a>

        <p className="absolute bottom-5 text-xs opacity-20">
          © 2024 Arison. All Rights Reserved
        </p>
      </div>
    </Container>
  );
};

export default Login;
