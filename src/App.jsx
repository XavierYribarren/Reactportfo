import MainApp from "./MainApp";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarApp from "./Components/carshow/CarApp";


function App(){



    return(
        <div className="route-app">
                <Router>
        <Routes>
            <Route path="/" element={<MainApp/>}/>
          <Route path="/car" element={<CarApp/>} />
          </Routes>
          </Router>
        </div>

    )
}

export default App;