import { render } from "@testing-library/react";
import Main from "./Main";

describe("Main tests", () => {
  it("should render", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
