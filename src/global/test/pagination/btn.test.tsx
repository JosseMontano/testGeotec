import Btn from "../../components/pagination/btn";
import { describe, beforeEach, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

describe("pagination-bnt", () => {
  const handleChangePage = vi.fn();
  const disabled = true;
  const text = "<";

  beforeEach(() => {
    render(
      <Btn handleChangePage={handleChangePage} txt={text} disabled={disabled} />
    );
  });

  test("there should be the btn", () => {
    const backButton = screen.getByText("<") as HTMLButtonElement;
    expect(backButton).toBeDefined();
  });

  test("should disable the back btn when it is the first page", () => {
    const backButton = screen.getByText("<") as HTMLButtonElement;
    const stateBtn = backButton.hasAttribute("disabled");

    expect(stateBtn).toBe(true);
  });
});
