import { useLocation,useNavigate,Navigate } from 'react-router-dom';
import React,{useState} from 'react';

function PrivateRoute({ children }){
    const [auth,setAuth]=useState(true)
    let location = useLocation();
    let navigate = useNavigate();
    if(!auth){
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
    return children;
}
export default PrivateRoute;