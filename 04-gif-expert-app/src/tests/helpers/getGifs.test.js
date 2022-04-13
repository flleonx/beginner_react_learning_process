import React from "react";
import { getGifs } from "../../helpers/getGifs";

describe('Test on getGifs fetch', () => {
  test('It should bring 10 elements', async () => {

    const gifs = await getGifs('One Punch');
    expect( gifs.length ).toBe( 10 );

  });

  test('It should bring 0 elements', async () => {

    const gifs = await getGifs('');
    expect( gifs.length ).toBe( 0 );

  });

});
