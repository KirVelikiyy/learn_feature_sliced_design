// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from "react";
import { Route, Routes, Link } from "react-router-dom";

const TasksListPage = lazy(() => import("./tasks-list"));
const TaskDetailsPage = lazy(() => import("./task-details"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" children={<TasksListPage />} />
            <Route path="/:taskId" children={<TaskDetailsPage />} />
            <Link to="/" />
        </Routes>
    );
};
