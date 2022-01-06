import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

import { PATH } from "../constants";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={PATH.HOME} element={<Home />} />
                <Route path={`${PATH.HOME}/:id`} element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
