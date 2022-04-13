import React from "react";
import { mount } from 'enzyme';
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Tests on <LoginScreen />', () => {

  const setUser = jest.fn();
  const user = {
    id: 1234,
    name: 'flleonx'
  };

  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('It should show <LoginScreen /> properly', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('It should show <LoginScreen /> properly', () => {

    wrapper.find('button').simulate('click');

    expect( setUser ).toHaveBeenCalledWith(user);

  });

});
