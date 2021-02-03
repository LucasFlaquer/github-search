import React from 'react';
import LogoVertical from '../../assets/logo-vertical.svg'
import FetchUser from '../../components/FetchUser';
import './styles.scss';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home-box">
        <img src={LogoVertical} alt="gihub Search"/>
        <FetchUser/>
      </div>
    </div>
  )
}

export default Home;