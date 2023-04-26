import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from "./App";


describe('TEST APP', () => {
  test('Router test', () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );
    // const mainLink = screen.getByTestId('main-link');
    // const aboutLink = screen.getByTestId('about-link');
    userEvent.click(screen.getByTestId('about-link')) 
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('main-link'))
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })

  test('Error test', () => {
    render(
    <MemoryRouter initialEntries={['/fdfvfvdf']}>
      <App />
    </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
 
