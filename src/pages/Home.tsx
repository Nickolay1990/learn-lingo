import { Header } from "../components/Header/Header";
import { Container } from "../components/Container/Container";
import css from "./Home.module.css";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <>
      <section className={css.homeSection}>
        <Container>
          <Header />
          <main>
            <Hero />
          </main>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
