import React, { useContext } from 'react';
import Header from '../../components/Header';
import userContext from '../../context/user';

import './styles.scss';
import LocationIcon from '../../assets/location.svg'
import WorkIcon from '../../assets/home-work.svg'
import FollowingIcon from '../../assets/following.svg'
import FollowersIcon from '../../assets/followers.svg'
import StarsIcon from '../../assets/stars.svg'
import RepositoriesIcon from '../../assets/repositories.svg'

const UserDetail: React.FC = () => {
  const { state: user } = useContext(userContext)
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="user">


          <div className="user__header">
            <figure className="user__avatar">
              <img src="https://avatars.githubusercontent.com/u/22601978?v=4" alt={user.name} />
            </figure>
            <div className="user__info">
              <h1 className="user__title">{user.name}</h1>
              <span className="user__twitter">{`@${user.twitter_username}`}</span>
              <p className="user__location">
                <span><img src={LocationIcon} alt="marker" />{user.location}</span>
                <span><img src={WorkIcon} alt="" />{user.company}</span>
              </p>
              <p className="user__stars">
                <span><img src={FollowingIcon} alt="" />{user.following}</span>
                <span><img src={FollowersIcon} alt="" />{user.followers}</span>
                <span><img src={StarsIcon} alt="" />10</span>
              </p>
            </div>
            <div className="user__total-repos">
              <span>Total Repositorios</span>
              {/* <p><img src={RepositoriesIcon} alt="" />{user.total_repos}</p> */}
            </div>
          </div>

          <div className="user__repos"></div>
        </div>

      </div>
    </>
  )
}

export default UserDetail;