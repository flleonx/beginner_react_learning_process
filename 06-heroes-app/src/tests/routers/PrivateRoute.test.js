import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Leaving here</span>
}));

describe('Tests on <PrivateRoute />', () => {

  Storage.prototype.setItem = jest.fn();

  test('It should display the component if the user is authenticated and save in the localStorage', () => {

    const contextValue = {
      user: {
        logged: true,
        name: "flleonx"
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe("Private Component");
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", '/');

  });

  test('It should block the component if the user is not authenticated', () => {

    const contextValue = {
      user: {
        logged: false,
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe("Leaving here");

  });

});
