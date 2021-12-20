import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from './data';
import ShowButton from './ShowButton';
import '../styles/Crypto.css';

const Crypto = () => {
  const cryptos = useSelector((state) => state.cryptos);
  const filterCryptos = cryptos.filter((crypto) => crypto !== undefined);
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);

  const navigate = useNavigate();

  const show = () => {
    if (itemsToShow === 4) {
      setItemsToShow(filterCryptos.length);
      setIsExpanded(true);
    } else {
      setItemsToShow(4);
      setIsExpanded(false);
    }
  };

  return (
    <section className="page-crypt">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Crypto Currencies</h4>
        <div className="top-left" />
      </div>

      <div className="banner crypt">
        {categories.map((item) => {
          const { path, category, market_cap: cap } = item;

          return category === 'Cryptos' && (
          <Link key={path} to={`/${path}`} className={`banner-link ${path}`}>
            <div className="banner-info">
              <h3 className="banner-title">{category}</h3>
              <p className="total">{`Market Capitalization: ${cap}`}</p>
            </div>
          </Link>
          );
        })}
      </div>

      <h4 className="sub-heading">Tradable Crypto Pairs</h4>

      <ul className="crypt-pairs">
        { filterCryptos.slice(0, itemsToShow).map((pair) => {
          const {
            name, symbol, price, change,
          } = pair;

          return (
            <li key={symbol} className="crypt pair">
              <div className="crypt-info pair-name">
                <h3 className="crypt-symbol">{symbol}</h3>
                <p className="crypt-name">{name}</p>
              </div>

              <div className="pair-prices">
                <p>
                  <span className="pair-high">Price:</span>
                  {' '}
                  {price}
                </p>
                {
                  change > 0
                    ? (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="positive">
                          {`+${change.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="negative">
                          {`${change.toFixed(5)} `}
                          &#9660;
                        </span>
                      </p>
                    )
                }
              </div>
            </li>
          );
        })}
      </ul>

      <ShowButton isExpanded={isExpanded} show={show} />
    </section>
  );
};

export default Crypto;
