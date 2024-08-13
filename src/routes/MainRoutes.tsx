import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { OurTeam } from "../pages/OurTeam/OurTeam";



const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:
            <App>
                <Home/>
            </App>
    },
    {
        path: "/ourteam",
        element:
        <App>
            <OurTeam/>
        </App>
    }
    
])
export default MainRoutes