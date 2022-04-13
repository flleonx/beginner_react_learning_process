import { mount } from "enzyme";

import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests on <AppRouter />', () => {


  test('It should show login if the user is not authenticated', () => {

    const contextValue = {
      user: {
        logged: false
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("h1").text().trim() ).toBe( "Login" );

  });

  test(`It should show Marvel's component if the user is authenticated`, () => {

    const contextValue = {
      user: {
        logged: true,
        name: "flleonx"
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".navbar").exists() ).toBeTruthy();

  });

});
