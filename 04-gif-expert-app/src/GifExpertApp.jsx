import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

// const [ categories, setCategories ] = useState(['One Punch']);
const [ categories, setCategories ] = useState( defaultCategories );

// const handleAdd = () => {
//   // setCategories( [ ...categories, 'HunterxHunter' ] );
//   setCategories( categories => [ ...categories, 'HunterxHunter' ] );
// };

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )

};

export default GifExpertApp;
