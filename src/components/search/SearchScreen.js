import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";

import { HeroCard } from "../heros/HeroCard"
import { useForm } from "../../hooks/useForm"
import { getHeroByName } from '../../selector/getHeroByName';





export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation() /*para obtener informacion de la ubicacion donde nos encontramos*/ 

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName( q );

  const showSearch = ( q === '' );
  const showError = ( heroes.length === 0);
 
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = ( e )=>{
    e.preventDefault();
    

    //if ( searchText.trim().length <= 1 ) return

    navigate(`?q=${ searchText.toLocaleLowerCase().trim() }`);

    

  }
 



  return (
    <>
        <h1>Search</h1>
        <hr/>
        
        <div className="row">

          <div className="col-5">

            <h4>Searching</h4>
            <hr/>

            <form onSubmit={ onSearchSubmit }>

              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>

            </form>

          </div>

          <div className="col-7">

            <h4> Result </h4>
            <hr/>
            
            {

              ( showSearch ) ?  <div className=" alert alert-primary"> Search a hero </div>
                 : ( showError ) && <div className=" alert alert-danger"> No hero with <b>{ q }</b> </div>

            }

            {

              heroes.map(hero => (
                 <HeroCard key={ hero.id } {...hero}/>
              ))
              
            }

          </div>
        </div>
    </>
  )
}
