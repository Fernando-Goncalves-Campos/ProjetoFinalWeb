import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Layout from "./Layout.js";
import "./App.css";
import "./Theme.css";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

const NoPage = () => {
    return <h1 id="Erro">404</h1>;
};

export default App;
