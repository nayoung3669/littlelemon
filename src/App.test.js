import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/booking/BookingForm';
import BookingPage from './components/booking/BookingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading',() => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

// test("client-side validation in BookingForm", () => {
//   render(<BookingPage />)
//   const input = screen.getAllByLabelText("res-date")
//   fireEvent.blur(input)
//   const validationElement = screen.getByText("Please fill out this field.")
//   expect(validationElement).toBeInTheDocument();
// })

