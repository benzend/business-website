import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home-page/Home";
import About from "./components/about-page/About";
import Blog from "./components/blog-page/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/blog" render={() => <Blog />} />
      </Router>
    </div>
  );
}

export default App;
