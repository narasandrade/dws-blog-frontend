import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterDropdown } from "./FilterDropdown";
import { vi } from "vitest";

const options = [
  { label: "Technology", value: "technology" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Travel", value: "travel" },
  { label: "Food", value: "food" },
  { label: "Fashion", value: "fashion" },
];

describe("FilterDropdown", () => {
  it("renders the filter dropdown button", () => {
    render(
      <FilterDropdown options={options} selected={[]} onChange={vi.fn()} />,
    );

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });

  it("opens the dropdown menu when clicking the filter button", async () => {
    const user = userEvent.setup();

    render(
      <FilterDropdown options={options} selected={[]} onChange={vi.fn()} />,
    );

    const button = screen.getByRole("button", { name: /filter/i });

    await user.click(button);

    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("Sports")).toBeInTheDocument();
    expect(screen.getByText("Travel")).toBeInTheDocument();
    expect(screen.getByText("Food")).toBeInTheDocument();
    expect(screen.getByText("Fashion")).toBeInTheDocument();
  });

  it("calls onChange when selecting an option", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <FilterDropdown options={options} selected={[]} onChange={onChange} />,
    );

    const button = screen.getByRole("button", { name: /filter/i });

    await user.click(button);

    const option = screen.getByText("Travel");

    await user.click(option);

    expect(onChange).toHaveBeenCalledWith(["travel"]);
  });
});
