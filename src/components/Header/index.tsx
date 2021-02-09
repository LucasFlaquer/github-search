import React from 'react';
import { Link } from 'react-router-dom';
import LogoHorizontal from '../../assets/logo-horizontal.svg'
import './styles.scss';

const Header: React.FC = () => {
  return (
    <header>
      <img src={LogoHorizontal} alt="Github Search"/>
      <Link to="/">
        <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.1657 10.6231H6.06311L14.4466 2.23961L12.207 0L0 12.207L12.207 24.414L14.4466 22.1744L6.06311 13.7909H29.1657V10.6231Z" fill="#B2B2B2"/>
        </svg>
      </Link>
      
    </header>
  )
}

export default Header;