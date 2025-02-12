import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";
import Home from "../Components/Home/Home";
import UserProfile from "../UserInformation/UserProfile/UserProfile";
import ProtectedRoute from "./Protected Route/ProtectedRoute";
import EstateDetails from "../Estate/Estate Detaiils/EstateDetails";
import ErrorPage from "../Components/Error Page/ErrorPage";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/userProfile',
                element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>
            },
            {
                path: '/estateDetails/:id',
                element: <ProtectedRoute><EstateDetails></EstateDetails></ProtectedRoute>,
                loader: () => fetch('../../public/Data/Residential_estate.json')

            }


        ]
    }
])

export default router;



