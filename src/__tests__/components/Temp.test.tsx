import React from "react";
import { Temp } from "../../components/Temp";
import { shallow } from "enzyme";

describe("<Temp />", () => {
  it("renders as expected", () => {
    const wrapper = shallow(<Temp />);
    expect(wrapper).toMatchSnapshot();
  });
});
