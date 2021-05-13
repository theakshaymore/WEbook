import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/detail/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
