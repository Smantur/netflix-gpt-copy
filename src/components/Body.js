import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";

const Body = () => {
    const appRoutes = createBrowserRouter([{
        path: "/", element: <Login />
    }, {
        path: "/Browse", element: <Browse />
    }])
    return (
        <div className="Body">
            <RouterProvider router={appRoutes}></RouterProvider>
        </div>
    )
}

export default Body;