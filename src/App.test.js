import { render, screen } from '@testing-library/react';
import App from './App';
import { KeyboardTwoTone, SpeakerGroupSharp } from '@material-ui/icons';
import BookingForm from './components/booking/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading',() => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

test("client-side validation in BookingForm", () => {
  render(<BookingForm />)
  const validationElement = screen.getByText("Please fill out this field.")
  expect(validationElement).toBeInTheDocument();
})

