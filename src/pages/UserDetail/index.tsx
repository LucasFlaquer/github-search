import React from 'react';
import Header from '../../components/Header';

import './styles.scss';
import LocationIcon from '../../assets/location.svg'
import WorkIcon from '../../assets/home-work.svg'
import FollowingIcon from '../../assets/following.svg'
import FollowersIcon from '../../assets/followers.svg'
import StarsIcon from '../../assets/stars.svg'
import RepositoriesIcon from '../../assets/repositories.svg'

const UserDetail: React.FC = () => {
  return (
    <>
      <Header/>
      <div className="about-container">
        <div className="user">
          <div className="user__header">
            <figure className="user__avatar">
              <img src="https://avatars.githubusercontent.com/u/22601978?v=4" alt="nome do usuario"/>
            </figure>
            <div className="user__info">
              <h1 className="user__title">Lucas Flaquer</h1>
              <span className="user__twitter">@twitter_url</span>
              <p className="user__location">
                <span><img src={LocationIcon} alt="marker"/> São Paulo - SP </span>
                <span><img src={WorkIcon} alt=""/> Google</span>
              </p>
              <p className="user__stars">
                <span><img src={FollowingIcon} alt=""/> 123</span>
                <span><img src={FollowersIcon} alt=""/> 87</span>
                <span><img src={StarsIcon} alt=""/> 39</span>
              </p>
            </div>
            <div className="user__total-repos">
              <span>Total Repositorios</span>
              <p><img src={RepositoriesIcon} alt=""/> 48</p>
            </div>
          </div>

          <div className="user__repos"></div>
        </div>

      </div>
    </>
  )
}

export default UserDetail;