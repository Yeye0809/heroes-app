import { RouterApp } from "../routers/RouterApp";
import { AuthProvider } from '../context/AuthProvider';

export const HeroesApp = () => {
  return (
    <AuthProvider >

      <RouterApp />

    </AuthProvider>

  )
}
