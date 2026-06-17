import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { FiltersPanel } from "./FiltersPanel";

const categories = [
  { label: "Technology", value: "technology" },
  { label: "Science", value: "science" },
];

const authors = [
  { label: "Alice", value: "alice" },
  { label: "Bob", value: "bob" },
];

describe("FiltersPanel", () => {
  it("does not show the clear filters button when no filters are selected", () => {
    render(
      <FiltersPanel
        categories={categories}
        authors={authors}
        selectedCategories={[]}
        selectedAuthors={[]}
        onApply={vi.fn()}
        onClear={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("button", { name: /clear filters/i }),
    ).not.toBeInTheDocument();
  });

  it("shows the clear filters button when a category is selected", () => {
    render(
      <FiltersPanel
        categories={categories}
        authors={authors}
        selectedCategories={["technology"]}
        selectedAuthors={[]}
        onApply={vi.fn()}
        onClear={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /clear filters/i }),
    ).toBeInTheDocument();
  });

  it("shows the clear filters button when an author is selected", () => {
    render(
      <FiltersPanel
        categories={categories}
        authors={authors}
        selectedCategories={[]}
        selectedAuthors={["alice"]}
        onApply={vi.fn()}
        onClear={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /clear filters/i }),
    ).toBeInTheDocument();
  });

  it("calls onClear when the clear filters button is clicked", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();

    render(
      <FiltersPanel
        categories={categories}
        authors={authors}
        selectedCategories={["technology"]}
        selectedAuthors={[]}
        onApply={vi.fn()}
        onClear={onClear}
      />,
    );

    await user.click(screen.getByRole("button", { name: /clear filters/i }));

    expect(onClear).toHaveBeenCalled();
  });
});
