import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe('Heading', () => {
  it('should render heading h1 by default', () => {
    render(<Heading>Hello</Heading>);

    expect(screen.getByRole('heading', { level: 1, name: /hello/i })).toBeInTheDocument();
  });
});