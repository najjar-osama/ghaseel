import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "../../components/HomePage";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<HomePage />);
});

test("It should render HomePage component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
