import MainApp from "./MainApp";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(){



    return(
        <div className="route-app">
                <Router>
        <Routes>
            <Route path="/" element={<MainApp/>}/>
          </Routes>
          </Router>
        </div>

    )
}

export default App;