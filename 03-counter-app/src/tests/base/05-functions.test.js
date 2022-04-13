
import { getUser, getUserActive } from '../../basics/05-functions';

describe('Tests 05-functions', () => {

  test('should return an object', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'Unknown_0102',
    };

    const user = getUser();

    expect( user ).toEqual( userTest );

  });

  test('should return an object with the specified username', () => {

    const username = "TestName";

    const userTest = {
      uid: 'ABC123',
      username,
    };

    const user = getUserActive( username );

    expect( user ).toEqual( userTest );

  });


});
