import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LoginPage />);
});

test("It Should render login page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
