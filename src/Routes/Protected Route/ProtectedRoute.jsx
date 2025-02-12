import { useContext } from "react";
import { AuthContext } from "../../Components/Shared Components/AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    else if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>



};

export default ProtectedRoute;