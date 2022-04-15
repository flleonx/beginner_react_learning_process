
// const getImagePromise = () => {
//   const promise = new Promise( (resolve, reject) => {
//     resolve("string");
//   });
//
//   return promise;
// };

export const getImage = async () => {
  try {
    const apiKey = process.env.API_KEY;
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;

  } catch (error) {
    // Handle error
    return 'It does not exis';
  }
};

// getImagePromise().then( console.log );

// request.then( resp => {
//   resp.json().then( data => {
//     console.log(data);
//   })
// })
// .catch( console.warn );
