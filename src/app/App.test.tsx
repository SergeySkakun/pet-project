import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import App from './App';

test('renders application header and logs message', async () => {
  // Шпионим за console.log, чтобы проверить вызов
  const consoleSpy = vi.spyOn(console, 'log');

  // Рендерим компонент в браузерном окружении Vitest
  const screen = await render(<App />);

  // Проверяем, что заголовок с правильным текстом присутствует на странице
  const heading = screen.getByRole('heading', { name: /my bicycle shop/i });
  expect(heading).toBeInTheDocument();

  // Проверяем, что console.log вызвался с нужной строкой
  expect(consoleSpy).toHaveBeenCalledWith('APP IS HERE!');

  // Очищаем шпион после теста
  consoleSpy.mockRestore();
});
