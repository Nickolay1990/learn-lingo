import { Header } from "../components/Header/Header";
import { Container } from "../components/Container/Container";
import css from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <section className={css.homeSection}>
        <Container>
          <Header />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
