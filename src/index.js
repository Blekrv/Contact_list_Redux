import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";
// Redux
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ContactList />} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/add-contact" exact render={() => <AddContact />} />
            <Route path="/edit-contact" exact render={() => <EditContact />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
