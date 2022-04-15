import React from 'react'
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react'

const FirstApp = ({ greet, subtitle }) => {
  // return (
  //   <Fragment>
  //     <h1>Hello World</h1>
  //     <p>My first app</p>
  //   </Fragment>
  // );

  // const greet = {
  //   name: "flleonx",
  //   age: 22
  // };

  return (
    <>
      <h1>{ greet }</h1>
      {/* <pre> { JSON.stringify( greet, null, 3) } </pre> */}
      <p>{ subtitle }</p>
    </>
  );

};

FirstApp.propTypes = {
  greet: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "I'm a subtitle"
};

export default FirstApp;
