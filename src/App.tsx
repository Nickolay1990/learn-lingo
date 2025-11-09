import { onValue } from "firebase/database";
import { starCountRef } from "./firebase.ts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home.tsx";

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
