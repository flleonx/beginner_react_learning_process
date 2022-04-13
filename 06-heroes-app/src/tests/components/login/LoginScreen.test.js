import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Tests on <LoginComponent />', () => {

  const action = {
    type: types.login,
    payload: {
      name: "flleonx",
    }
  };

  const contextValue = {
    user: {
      logged: false
    },
    dispatch: mockDispatch
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('It should display <LoginComponent /> properly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('It should call dispatch and navigate', () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect( mockDispatch ).toHaveBeenCalledWith( action );
    expect( mockNavigate ).toHaveBeenCalledWith("/marvel", { replace: true });

    localStorage.setItem("lastPath", "/dc");
    button.simulate("click");
    expect( mockNavigate ).toHaveBeenCalledWith("/dc", { replace: true });
  });

});
