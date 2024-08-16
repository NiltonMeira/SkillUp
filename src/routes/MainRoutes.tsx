import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { OurTeam } from "../pages/OurTeam/OurTeam";
import { MariliaPage } from "../pages/Marilia/MariliaPage";
import { VanusaPage } from "../pages/Vanusa/VanusaPage";
import { Services } from "../pages/Services/Services";
import { Contact } from "../pages/Contact/Contact";



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
    },
    {
        path: "/Marilia",
        element:
        <App>
            <MariliaPage/>
        </App>
    },
    {
        path: "/Vanusa",
        element: 
        <App>
            <VanusaPage/>
        </App>
    },
    {
        path: "/services",
        element:
        <App>
            <Services/>
        </App>
    },
    {
        path: "/contact",
        element:
        <App>
            <Contact/>
        </App>
    }
    
])
export default MainRoutes