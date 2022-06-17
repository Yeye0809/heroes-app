
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const RouterApp = () => {
  return (

    <BrowserRouter>

        <Routes>
            
            <Route path="/login" element={
              <PublicRouter>
                <LoginScreen />
              </PublicRouter>
            } 
            />

            
            <Route path="/*" element={ 
                <PrivateRouter>
                  <DashboardRoutes />
                </PrivateRouter> }
            />
            
        </Routes>
    </BrowserRouter>
  )
}
