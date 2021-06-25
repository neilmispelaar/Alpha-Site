/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import About from "./about";

describe("About", () => {
  it("renders without crashing", () => {
    render(<About />);
    expect(screen.getByText("skipToMainContentBtn")).toBeInTheDocument();
  });
});
