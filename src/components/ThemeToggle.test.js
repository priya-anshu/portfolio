import { fireEvent, render, screen } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function ThemePaletteProbe() {
  const { colors } = useTheme();
  return <output data-testid="theme-background">{colors.bg}</output>;
}

function renderThemeControls() {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

test('renders the theme preview control', () => {
  renderThemeControls();

  expect(screen.getByRole('button', { name: 'Preview themes' })).toBeInTheDocument();
});

test('allows visitors to preview a calendar theme', () => {
  renderThemeControls();

  fireEvent.click(screen.getByRole('button', { name: 'Preview themes' }));
  fireEvent.change(screen.getByLabelText('Preview a theme'), {
    target: { value: 'christmas' },
  });

  expect(document.documentElement).toHaveAttribute('data-theme', 'christmas');
});

test('calendar themes keep the portfolio appearance palette unchanged', () => {
  localStorage.setItem('theme', 'light');
  render(
    <ThemeProvider>
      <ThemeToggle />
      <ThemePaletteProbe />
    </ThemeProvider>,
  );
  const originalBackground = screen.getByTestId('theme-background').textContent;

  fireEvent.click(screen.getByRole('button', { name: 'Preview themes' }));
  fireEvent.change(screen.getByLabelText('Preview a theme'), {
    target: { value: 'halloween' },
  });

  expect(screen.getByTestId('theme-background')).toHaveTextContent(originalBackground);
  expect(document.documentElement).not.toHaveClass('dark');
});

test('requests phone motion from an explicit user action', () => {
  const dispatchEvent = jest.spyOn(window, 'dispatchEvent');
  renderThemeControls();

  fireEvent.click(screen.getByRole('button', { name: 'Enable phone motion' }));

  expect(dispatchEvent).toHaveBeenCalledWith(
    expect.objectContaining({ type: 'theme:request-device-motion' }),
  );
  expect(screen.getByRole('status')).toHaveTextContent(
    'Waiting for phone motion permission',
  );
  dispatchEvent.mockRestore();
});
