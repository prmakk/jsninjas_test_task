import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./styles/global.scss";
import "./styles/normalize.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import HeroPage from "./pages/HeroPage/HeroPage";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/heroes/:id" element={<HeroPage />} />
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
