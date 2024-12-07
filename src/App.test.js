
import { render } from "@testing-library/react";
import App from "./App";

// Mock the ChessBoard component
jest.mock("./components/ChessBoard/ChessBoard", () => () => <div>ChessBoard Component</div>);

describe("App Component", () => {
  test("renders correctly and matches the snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot(); // Takes a snapshot of the rendered output
  });

  test("renders ChessBoard component and matches snapshot", () => {
    const { container } = render(<App />);
    const chessBoardComponent = container.querySelector("div");
    expect(chessBoardComponent).toMatchSnapshot(); // Matches only the ChessBoard part
  });
});
