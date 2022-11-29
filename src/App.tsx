import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularMovies from "./pages/PopularMovies";

import "./styles/main.scss";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <PopularMovies />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
