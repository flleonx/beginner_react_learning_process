import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

// The prefix "mock" is important. It will be throw a scope error is it's missed
const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe("Tests on <Navbar />", () => {

  const contextValue = {
    user: {
      logged: true,
      name: "flleonx"
    },
    dispatch: mockDispatch
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navbar />}/>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("It should show <Navbar /> properly", () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".text-info").text().trim() ).toBe("flleonx");
  });

  test("It should call logout, call navigate and dispatch with the proper arguments", () => {
    wrapper.find("button").simulate("click");
    expect( mockDispatch ).toHaveBeenCalledWith({ type: types.logout });
    expect( mockNavigate ).toHaveBeenCalledWith("/login", { replace: true });
  });

});
