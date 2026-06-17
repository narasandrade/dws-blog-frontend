import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders the search input", () => {
    render(<SearchInput value="" onChange={vi.fn()} />);

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("calls onChange when the user types", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<SearchInput value="" onChange={onChange} />);

    await user.type(screen.getByPlaceholderText("Search"), "React");

    expect(onChange).toHaveBeenCalled();
  });

  it("shows the clear button when there is a value", () => {
    render(<SearchInput value="React" onChange={vi.fn()} onClear={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /clear search/i }),
    ).toBeInTheDocument();
  });

  it("does not show the clear button when the value is empty", () => {
    render(<SearchInput value="" onChange={vi.fn()} onClear={vi.fn()} />);

    expect(
      screen.queryByRole("button", { name: /clear search/i }),
    ).not.toBeInTheDocument();
  });

  it("calls onClear when the clear button is clicked", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();

    render(<SearchInput value="React" onChange={vi.fn()} onClear={onClear} />);

    await user.click(screen.getByRole("button", { name: /clear search/i }));

    expect(onClear).toHaveBeenCalled();
  });
});
