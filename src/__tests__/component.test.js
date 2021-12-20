import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';
import Forex from '../components/Forex';
import Crypto from '../components/Crypto';
import EFTs from '../components/EFTs';
import Majors from '../components/Majors';
import Stocks from '../components/Stocks';
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

test('', () => {
  const homepage = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const section = homepage.container.querySelector('section');
  expect(section.className).toBe('home-page');
});

test('', () => {
  const forex = render(
    <Provider store={store}>
      <Router>
        <Forex />
      </Router>
    </Provider>,
  );
  const sec = forex.container.querySelector('section');
  expect(sec.className).toBe('page-forex');
});

test('', () => {
  const crypto = render(
    <Provider store={store}>
      <Router>
        <Crypto />
      </Router>
    </Provider>,
  );
  const crydiv = crypto.container.querySelector('div');
  expect(crydiv.className).toBe('top-bar');
});

test('', () => {
  const efts = render(
    <Provider store={store}>
      <Router>
        <EFTs />
      </Router>
    </Provider>,
  );
  const eftsec = efts.container.querySelector('section');
  expect(eftsec.className).toBe('page-efts');
});

test('', () => {
  const majors = render(
    <Provider store={store}>
      <Router>
        <Majors />
      </Router>
    </Provider>,
  );
  const majorsec = majors.container.querySelector('section');
  expect(majorsec.className).toBe('page-majors');
});

test('', () => {
  const stocks = render(
    <Provider store={store}>
      <Router>
        <Stocks />
      </Router>
    </Provider>,
  );
  const stockssec = stocks.container.querySelector('section');
  expect(stockssec.className).toBe('page-stocks');
});
