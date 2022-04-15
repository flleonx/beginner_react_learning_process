import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";

import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Tests on <HeroScreen />', () => {

  test('It should not display <HeroScreen /> if there is not hero in the URL', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.find("h1").text().trim() ).toBe("No hero page");

  });

  test(`It should display <HeroScreen /> if the URL param exists and it's finded`, () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.find(".row").exists() ).toBeTruthy();

  });

  test('It should return to the previous window', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect( mockNavigate ).toHaveBeenCalledWith( -1 );

  });

  test(`It should not display <HeroScreen /> if the hero does not exists`, () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider1234"]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.text().trim() ).toBe("No hero page");
  });

});
