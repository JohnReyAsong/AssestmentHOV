import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import "./Assets/CSS/main.scss";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const client = new ApolloClient({
    uri: "https://spotify-graphql-server.herokuapp.com/graphql?",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="main-container">
        <header>
          <Header />
        </header>
        <nav className="sidebar">
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/" />
            </Switch>
          </Router>
        </nav>
      </div>
    </ApolloProvider>
  );
}

export default App;
