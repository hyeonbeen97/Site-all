import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <div className="header__logo score9">
          <Link to="/">
            HB<em>site</em>
          </Link>
        </div>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/intro">소개</Link>
            </li>
            <li>
              <Link to="/member">멤버</Link>
            </li>
            <li>
              <Link to="/port">포트폴리오</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

