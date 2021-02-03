import React from 'react';
import LogoVertical from '../../assets/logo-vertical.svg'
import FetchUser from '../../components/FetchUser';
import GithubCorner from '../../components/GithubCorner';
import './styles.scss';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home-box">
        <img src={LogoVertical} alt="gihub Search"/>
        <FetchUser/>
      </div>
      <GithubCorner address="https://github.com/LucasFlaquer/github-search" primary="#8752CC"/>
    </div>
  )
}

export default Home;