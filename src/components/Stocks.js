import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShowButton from './ShowButton';
import { categories } from './data';
import Loading from './Loading';
import '../styles/Stocks.css';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocks);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    if (itemsToShow === 4 || itemsToShow === stocks.length) {
      setIsLoading(false);
    }
  }, [isExpanded]);

  const show = () => {
    if (itemsToShow === 4) {
      setItemsToShow(stocks.length);
      setIsExpanded(true);
      setIsLoading(true);
    } else {
      setItemsToShow(4);
      setIsExpanded(false);
    }
  };

  return (
    <section className="page-stocks">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Stocks</h4>
        <div className="top-left" />
      </div>

      <div className="banner stocks">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Stocks' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Tradable Stocks</h4>

      {
        isLoading
          ? <Loading body="stock-pairs" />
          : (
            <ul className="stock-pairs">
              { stocks.slice(0, itemsToShow).map((stock) => {
                const { name, price, symbol } = stock;

                return (
                  <li key={symbol} className="stocks pair">
                    <div className="stock-info pair-name">
                      <h3 className="stock-symbol">{symbol}</h3>
                      <p className="stock-name">{name}</p>
                    </div>

                    <div className="stock pair-prices">
                      <p>
                        <span className="pair-high">Price:</span>
                        {' '}
                        {price}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )
      }

      <ShowButton isExpanded={isExpanded} show={show} />
    </section>
  );
};

export default Stocks;
