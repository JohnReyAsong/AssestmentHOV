import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import "./Assets/CSS/style.scss";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://spotify-graphql-server.herokuapp.com/graphql?query=%7B%0A%20%20queryArtists(byName%3A%20%22Olivia%20Rodrigo%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%20%20albums%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20image%20%0A%20%20%20%20%20%20tracks%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20preview_url%0A%20%20%20%20%20%20%20%20artists%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",
  });

  return (
    <ApolloProvider client={client}>
      <div className="main-container">
        <Header />
      </div>
    </ApolloProvider>
  );
}

export default App;
