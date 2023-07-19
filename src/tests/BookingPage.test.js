import { render, screen, fireEvent } from '@testing-library/react';
import App from "../components/App";

//Render app component to avoid render all the structure with browser router and so on.
test('renders webpage and navigate to booking page', () => {
    render(<App></App>);
    const reservationButton = screen.queryByText('Reserve a table');
    fireEvent.click(reservationButton);
    const bookingHeadingElement = screen.queryByText('Make a reservation');
    expect(bookingHeadingElement).toBeInTheDocument();
});

// test('Click book reservation to trigger validation', () => {
//     render(<App></App>);
//     const reservationBtn = screen.queryByText('Reserve a table');
//     fireEvent.click(reservationBtn);
//     const labelElement = screen.queryByText('Choose date');
//     expect(labelElement).toBeInTheDocument();
// });