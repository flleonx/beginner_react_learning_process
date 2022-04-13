import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const filteredHeroes = useMemo( () => getHeroesByName( q ), [ q ] );

  const handleSearch = (e) => {
    console.log(searchText)
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className="alert alert-info">Search a hero</div>
              : ( filteredHeroes.length === 0 )
                && <div className="alert alert-danger">There are not results: { q }</div>
          }

          {
            filteredHeroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  );
};
