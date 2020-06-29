import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/category">Category</Link>
                        <Link to="/entry">Entry</Link>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/category" component={CategorySelectionView} />
                        <Route exact path="/entry" component={NewEntryView} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;