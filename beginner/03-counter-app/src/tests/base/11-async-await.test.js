
import { getImage } from '../../basics/11-async-await';

describe('Test 11-async-await', () => {
  test('it should return the image url', async () => {

    const url = await getImage();

    expect( url.includes('https://') ).toBe( true );

  })

})
