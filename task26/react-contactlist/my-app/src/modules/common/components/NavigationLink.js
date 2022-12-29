import React from 'react'
import { NavLink } from 'react-router-dom';

function NavigationLink({page, navigate, label, currentPage }) {
  return (
    <div className={'navigation-link'}>
        <NavLink to={page}>{label}</NavLink>
    </div>
  );
}

export default NavigationLink