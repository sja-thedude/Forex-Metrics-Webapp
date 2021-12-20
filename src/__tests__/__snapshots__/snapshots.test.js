import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Crypto from '../../components/Crypto';
import EFTs from '../../components/EFTs';
import Home from '../../components/Home';
import Forex from '../../components/Forex';
import Loading from '../../components/Loading';
import Majors from '../../components/Majors';
import Stocks from '../../components/Stocks';

describe('test screenshots for all components', () => {
  test('matches Crypto snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Crypto />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches EFTs snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <EFTs />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Forex snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Forex />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Loading snapshot', () => {
    const tree = TestRenderer.create(<Loading body="stocks" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Majors snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Majors />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Stocks snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Stocks />
        </Router>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
