import Loader from "../components/loader";
import { describe, beforeEach, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test("should show a loader", () => {
    const loaderComponent = screen.getByTestId("loader");
    expect(loaderComponent).toBeDefined();
  });
});
