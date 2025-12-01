import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
