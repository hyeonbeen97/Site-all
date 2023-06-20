import React from 'react';

const Header = (props) => {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <div className="header__logo score9">
          <a href="/">
            HB<em>site</em>
          </a>{' '}
        </div>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="/member">멤버</a>{' '}
            </li>
            <li>
              <a href="/port">포트폴리오</a>{' '}
            </li>
            <li>
              <a href="/youtube">유튜브</a>{' '}
            </li>
            <li>
              <a href="/unsplash">이미지</a>{' '}
            </li>
            <li>
              <a href="/movie">영화</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
