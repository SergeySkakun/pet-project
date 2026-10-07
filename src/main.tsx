import { createRoot } from 'react-dom/client';

import { App } from './app';

function TestElement() {
  return (
    <div>
      <App />
      <div>Hello World</div>
    </div>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<TestElement />);
}
