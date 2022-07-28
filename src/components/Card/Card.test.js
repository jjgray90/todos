import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card tests", () => {
  it("should render", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});
