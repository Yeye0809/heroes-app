import {useReducer} from 'react'

import {AuthContext} from './AuthContext'
import {AuthReducer} from './AuthReducer'

import {types} from '../types/types'
 
const inicialState = {
    logged: false,
}

export const AuthProvider = ({ children}) => {

    const init = () => {
       const user = JSON.parse ( localStorage.getItem('user') ) 

       return {
          logged: !!user,
          user: user

       } 
    }

    const [authState, dispatch ] = useReducer( AuthReducer, inicialState, init )

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name }
        const action = { type: types.login,  payload: user  }

        localStorage.setItem('user', JSON.stringify( user ) );
        
        dispatch(action);
    }

    const logout = () =>{
        localStorage.removeItem('user');

        const action = { type: types.logout }

        dispatch(action)
    }


  return (
        <AuthContext.Provider value={{ 
            ...authState,
            
            login: login,
            logout: logout
            }}>

              { children }

        </AuthContext.Provider>
  )
}
