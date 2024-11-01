import { Routes, Route } from "react-router-dom";

import "./styles/global.scss";
import "./styles/normalize.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/heroes/:id" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
