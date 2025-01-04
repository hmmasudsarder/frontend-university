import App from "@/App";
import Task from "@/pages/Task";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Task/>
            }
        ],
    },
    {
        path: "/login",
        element: <div>Login</div>
    }
])

export default routes;