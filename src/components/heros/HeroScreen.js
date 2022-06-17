import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByid } from "../../selector/getHeroByid";


export const HeroScreen = () => {

  const navigate = useNavigate()
  const { id } = useParams();

  const handleNavigateReturn = () => {
    
    navigate(-1)

  }

  const hero = useMemo(()=> getHeroByid( id ), [ id ]);

  if( !hero ){
    return  <Navigate to="/dc"/>
  }
  

  return (
    <div className="row  mt-5">
      <div className="col-4">
        <img 
          src={`/assets/${id}.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>alter ego</b> { hero.alter_ego }</li>
          <li className="list-group-item"> <b>Publisher</b> { hero.publisher }</li>
          <li className="list-group-item"> <b>First appearance</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
        className="btn btn-outline-primary"
        onClick={ handleNavigateReturn }>
            Return
        </button>
      </div>
       
    </div>
  )
}
