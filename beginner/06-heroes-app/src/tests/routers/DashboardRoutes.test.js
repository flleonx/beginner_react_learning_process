import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Tests on <DashboardRoutes />', () => {

  const contextValue = {
    user: {
      logged: true,
      name: "flleonx"
    }
  };

  test('It should show <DashboardRoutes /> properly - Marvel', () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/"] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".text-info").text().trim() ).toBe( "flleonx" );
    expect( wrapper.find("h1").text().trim() ).toBe( "MarvelScreen" );

  });

  test('It should show <DashboardRoutes /> properly - DC', () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/dc"] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".text-info").text().trim() ).toBe( "flleonx" );
    expect( wrapper.find("h1").text().trim() ).toBe( "DCScreen" );

  });

});
