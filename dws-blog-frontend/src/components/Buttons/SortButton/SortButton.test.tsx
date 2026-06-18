import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { SortButton } from "./SortButton";

describe("SortButton", () => {
  it('renders "Newest first" when sortOrder is newest', () => {
    render(<SortButton sortOrder="newest" onToggle={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /newest first/i }),
    ).toBeInTheDocument();
  });

  it('renders "Oldest first" when sortOrder is oldest', () => {
    render(<SortButton sortOrder="oldest" onToggle={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /oldest first/i }),
    ).toBeInTheDocument();
  });

  it("calls onToggle when the button is clicked", async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();

    render(<SortButton sortOrder="newest" onToggle={onToggle} />);

    await user.click(screen.getByRole("button", { name: /newest first/i }));

    expect(onToggle).toHaveBeenCalled();
  });
});
