import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from './data';
import {
  getForex, getCryptos, getStocks, getEFTs,
} from '../redux/actions/markets';
import '../styles/Home.css';

const Home = () => {
  const forex = useSelector((state) => state.forex);
  const cryptos = useSelector((state) => state.cryptos);
  const stocks = useSelector((state) => state.stocks);
  const efts = useSelector((state) => state.efts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!forex.length) {
      dispatch(getForex());
    }

    if (!cryptos.length) {
      setTimeout(() => dispatch(getCryptos()), 2000);
    }

    if (!stocks.length) {
      dispatch(getStocks());
    }

    if (!efts.length) {
      dispatch(getEFTs());
    }
  }, []);

  return (
    <section className="home-page">
      <div className="top-bar">
        <h4>Markets</h4>
        <div className="top-left">
          <i className="microphone icon" />
          <i className="cog icon" />
        </div>
      </div>

      <div className="banner home">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Forex' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Popular</h4>

      <div className="content-body">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category !== 'Forex' && (
          <Link key={path} to={`/${path}`} className={`category ${path}`}>
            <div className="category-info">
              <i className="chevron circle right icon" />
              <h3 className="category-title">{category}</h3>
              <p className="total">{`Cap: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <div className="bottom-bar" />
    </section>
  );
};

export default Home;
