import React, { Component } from "react";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    render() {
        return (
            <div>
                <HomeView />
                <CategorySelectionView />
                <NewEntryView />
            </div>
        );
    };
};

export default App;