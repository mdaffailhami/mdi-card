// import "bootstrap/dist/css/bootstrap.min.css";
// import { NativeRouter, Route, Switch } from "react-router-native";
import { BrowserRouter, Route } from "react-router-dom";
import { CardCreated, Home, Card } from "./pages";

function App() {
  // return <Create />;
  return (
    // <Home />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/card-created" component={CardCreated} />
      <Route path="/card/*" component={Card} />
    </BrowserRouter>
    // <NativeRouter>
    //   <Route exact path="/" component={Home} />
    // </NativeRouter>
  );
}

export default App;
