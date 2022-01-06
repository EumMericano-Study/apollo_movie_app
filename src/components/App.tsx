import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
        </Router>
    );
}

export default App;
