import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LinkItem as Link } from "../";

describe("Link", () => {
  it("renders a link.", () => {
    render(<Link href="/test">Test link</Link>);

    const link = screen.getByRole("link", { value: "Test Link" });

    expect(link).toBeInTheDocument();
  });

  it("has the correct href value.", () => {
    render(<Link href="/test">Test link</Link>);

    expect(document.querySelector("a").getAttribute("href")).toBe("/test")

  });
});
