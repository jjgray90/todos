import { render } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField tests", () => {
  it("should render", () => {
    const { container } = render(<InputField />);
    expect(container).toMatchSnapshot();
  });
});
