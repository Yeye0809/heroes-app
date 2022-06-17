import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";



export const PrivateRouter = ( {children} ) => {
    
   const { logged } = useContext( AuthContext );
   const {pathname, search} = useLocation();

   const lastPath = pathname + search;

    useEffect(() => {
       
      localStorage.setItem('lastPath', lastPath);
      console.log('re-render')   
      
    }, [lastPath])
   

   
   

  return ( logged )
            ?  children 
             : <Navigate  to="/login" />
}
