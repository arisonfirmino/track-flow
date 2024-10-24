import Container from "../components/Container";
import Header from "../components/Header";
import Menu from "../components/menu";
import NewReleases from "../components/NewReleases";

const Home = () => {
  return (
    <Container>
      <div className="px-5 pt-5">
        <Header />
      </div>

      <div className="px-5 pt-5">
        <Menu />
      </div>

      <NewReleases />
    </Container>
  );
};

export default Home;
