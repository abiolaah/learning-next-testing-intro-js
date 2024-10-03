import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); //ARRANGE

    const docElement = screen.getByText("Read our docs"); //ACT

    expect(docElement).toBeInTheDocument(); //ASSERT
  });

  it("should have Learn text", () => {
    render(<Home />); //ARRANGE

    const learnElement = screen.getByText(/learn/i); //ACT

    expect(learnElement).toBeInTheDocument(); //ASSERT
  });

  it("should have Examples link", () => {
    render(<Home />); //ARRANGE

    // const learnElement = screen.getByText(/learn/i); //ACT
    const linkElement = screen.getByRole("link", { name: "Examples" });

    expect(linkElement).toBeInTheDocument(); //ASSERT
  });
});
