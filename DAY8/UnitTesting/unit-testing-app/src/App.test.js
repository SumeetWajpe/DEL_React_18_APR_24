import { act } from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("tests for App Component", () => {
  it("tests if App component is instanciated", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("state count is initialized to 100", () => {
    const app = shallow(<App />);
    const state = app.state();
    expect(state.count).toBe(100);
  });

  it("increment count", () => {
    const app = shallow(<App />);

    const button = app.find("button");
    button.simulate("click");
    const pText = app.find("p").text();
    expect(pText).toBe("Count : 101");
  });
});
