import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {

  const { heroId } = useParams();

  // It's optimal use "useMemo hook" if we manage some state in this component
  // the return of "getHeroById" could be a heavy process
  const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );

  const navigate = useNavigate();

  const handleReturn = () => {
    // It does not only receive a string as a parameter
    navigate( -1 );
  };

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  // const imagePath = `/assets/${ id }.jpg`; // based on public folder
  const imagePath = heroImages(`./${ id }.jpg`);

  return (
    <div className=" row mt-5">
      <div className="col-4">
        <img
          src={ imagePath }
          alt={ superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
          <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Return
        </button>

      </div>
    </div>
  )
};
