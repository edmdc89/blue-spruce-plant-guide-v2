import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <section>
      <NavLink to="/">
        <h1>Blue Spruce Plant Guide</h1>
      </NavLink>
      <nav>
        <NavLink to="/plant-index">Plant Index</NavLink>
      </nav>
    </section>
  );
};

export default Header;
