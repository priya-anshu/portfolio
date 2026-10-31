import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/ThemeCanvas', () => () => null);
jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_, element) => ({ children, ...props }) => {
      const motionProps = [
        'animate',
        'exit',
        'initial',
        'transition',
        'variants',
        'viewport',
        'whileFocus',
        'whileHover',
        'whileInView',
        'whileTap',
      ];
      const domProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !motionProps.includes(key)),
      );
      return jest.requireActual('react').createElement(
        element,
        domProps,
        children,
      );
    },
  }),
}));

test('renders the portfolio entry content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Priyanshu' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Preview themes' })).toBeInTheDocument();
});
