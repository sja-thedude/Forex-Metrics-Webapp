import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShowButton from './ShowButton';
import { categories } from './data';
import '../styles/Forex.css';

function Forex() {
  const forex = useSelector((state) => state.forex);
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const navigate = useNavigate();

  const show = () => {
    if (itemsToShow === 3) {
      setItemsToShow(forex.length);
      setIsExpanded(true);
    } else {
      setItemsToShow(3);
      setIsExpanded(false);
    }
  };

  return (
    <section className="page-forex">
      <div className="top-bar">
        <button
          type="button"
          className="go-back"
          onClick={() => navigate('/')}
        >
          <i className="chevron left icon" />
        </button>
        <h4>Currencies</h4>
        <div className="top-left" />
      </div>

      <div className="banner forex">
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

      <h4 className="sub-heading">Tradable Forex Pairs</h4>

      <ul className="forex-pairs">
        { forex.slice(0, itemsToShow).map((pair) => {
          const {
            ticker, high, low, changes,
          } = pair;

          return (
            <li key={ticker} className="forex pair">
              <h3 className="pair-name">{ticker}</h3>
              <div className="pair-prices">
                <p>
                  <span className="pair-high">High:</span>
                  {' '}
                  {high}
                </p>
                <p>
                  <span className="pair-low">Low:</span>
                  {' '}
                  {low}
                </p>
                {
                  changes > 0
                    ? (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="positive">
                          {`+${changes.toFixed(5)} `}
                          &#9650;
                        </span>
                      </p>
                    )
                    : (
                      <p>
                        <span className="pair-change">Change:</span>
                        {' '}
                        <span className="negative">
                          {`${changes.toFixed(5)} `}
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
}

export default Forex;
