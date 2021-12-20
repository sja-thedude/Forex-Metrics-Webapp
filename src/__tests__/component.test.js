import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

test('renders markets on page', () => {
  const rendered = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );

  const div = rendered.container.querySelector('div');
  expect(div.className).toBe('markets');
});
