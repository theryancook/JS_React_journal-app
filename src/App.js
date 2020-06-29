import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    render() {
        return (
            <div>
<BrowserRouter>
    <div>
        <Route path="/" component={HomeView} />
        <Route path="/test" component={HomeView} />
        <Route path="/category/test" component={HomeView} />
        <Route path="/category" component={HomeView} />
        <Route exact path="/category" component={CategorySelectionView} />
        <Route exact path="/entry" component={NewEntryView} />
    </div>
</BrowserRouter>
            </div>
        );
    };
};

export default App;