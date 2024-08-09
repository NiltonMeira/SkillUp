import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { QuemSomos } from "../pages/QuemSomos/QuemSomos";



const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:
            <App>
                <Home/>
            </App>
    },
    {
        path: "/quemsomos",
        element:
            <App>
                <QuemSomos/>
            </App>
    }
])

export default MainRoutes