import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from "../components/App";

//Render app component to avoid render all the structure with browser router and so on.
test('renders reserve a table button correctly', () => {
    render(<App></App>);
    const buttonElement = screen.queryByText('Reserve a table');
    expect(buttonElement).toBeInTheDocument();
});

test('renders home page title correctly', () => {
    render(<App></App>
);
    const headingElement = screen.queryByText('Specials');
    expect(headingElement).toBeInTheDocument();
});
