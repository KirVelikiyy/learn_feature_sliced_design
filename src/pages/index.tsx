import { lazy } from "react";
import { Route, Routes, Link } from "react-router-dom";

const TestPage = lazy(() => import("./test"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Link to="/" />
        </Routes>
    );
};
