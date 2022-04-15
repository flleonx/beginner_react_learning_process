import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

// The prefix "mock" is important. It will be throw a scope error is it's missed
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe("Tests on <SearchScreen />", () => {

  test("It should show <SearchScreen /> with default values properly", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".alert-info").text().trim() ).toBe("Search a hero");
  });

  test("It should show Batman and the input with the queryString value", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".alert-info").length ).toBe(0);
    expect( wrapper.find("input").prop("value") ).toBe("batman");
  });

  test("It should display an alert message when no hero is found", () => {

    const q = "batman123";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${ q }`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect( wrapper.find(".alert-info").length ).toBe(0);
    expect( wrapper.find("input").prop("value") ).toBe(q);
    expect( wrapper.find(".alert-danger").text().trim() ).toBe(`There are not results: ${ q }`);
  });

  test("It should call navigate to the new window", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: "batman"
      }
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault: () => {}
    });

    expect( mockNavigate ).toHaveBeenCalledWith("?q=batman");

  });

});
