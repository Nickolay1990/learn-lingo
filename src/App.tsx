import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home.tsx";
import TeachersPage from "./pages/Teachers/Teachers.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { useUserStore } from "./stores/user.store.ts";
import FavoritePage from "./pages/FavoritePage/FavoritePage.tsx";

function App() {
  const user = useUserStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          {user && <Route path="/favorite" element={<FavoritePage />} />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
