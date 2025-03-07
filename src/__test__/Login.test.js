import { render, screen } from "@testing-library/react";
import Login from "../components/Login";

test("checking component load", () => {
  //steps for testing heading element loaded
  render(<Login />);
  expect(screen.queryByText(/Login/)).toBeInTheDocument();
});

test("checking email & password inputs are empty", () => {
  render(<Login />);
  expect(screen.queryByPlaceholderText("email")).toHaveValue("");
  expect(screen.queryByPlaceholderText("password")).toHaveValue("");
});
