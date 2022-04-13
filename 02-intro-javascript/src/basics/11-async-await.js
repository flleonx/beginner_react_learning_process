
// const getImagePromise = () => {
//   const promise = new Promise( (resolve, reject) => {
//     resolve("string");
//   });
//
//   return promise;
// };

const getImage = async () => {
  try {
    const apiKey = 'SooI1bFqf5yRFCnMP3KbiG86ujVZvFSz';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

  } catch (error) {
    // Handle error
  }
};

// getImagePromise().then( console.log );
getImage();


// request.then( resp => {
//   resp.json().then( data => {
//     console.log(data);
//   })
// })
// .catch( console.warn );
