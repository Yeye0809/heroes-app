import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const { login  } = useContext( AuthContext );
    const navigate = useNavigate();
    const {nameText, onInputChange } = useForm( {nameText: ''});

    
    const handleLogin = () =>{
        
        if ( nameText === '') return alert( 'Se necesita un nombre para ingresar' );
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        login( nameText );

        navigate( lastPath , {
        replace: true
        });
         /*el replace reemplaza la vista actual, ya no regresa al login*/
  }
  
    
  
    return (
      <div className="container mt-5">
          <h1>LoginScreen</h1>
          <hr/>
        

            <div className="row justify-content-center mt-5">
                <div className="col-4">

                    <form >

                        <input
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                            name="nameText"
                            autoComplete="off"
                            value={ nameText }
                            onChange={ onInputChange }
                        />


                        <button
                            type="button"
                            className="btn btn-primary mt-1"
                            onClick={ handleLogin }
                        >
                        login
                        </button>

                    </form> 

                </div>
            </div>
        

              

          

      </div>
    )
  }
   