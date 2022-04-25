import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/Error/NotFound";
import { Favorite } from "./pages/Favorite";
import { HomePage } from "./pages/Home";
import { Movie } from "./pages/Movie";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
