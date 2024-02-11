import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";


const PrivateRoute = ({childern}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
   
    if(user?.email){
        return childern
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;