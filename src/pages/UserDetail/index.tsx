import React from 'react';
import Header from '../../components/Header';

import './styles.scss';
import LocationIcon from '../../assets/location.svg'
import WorkIcon from '../../assets/home-work.svg'
import FollowingIcon from '../../assets/following.svg'
import FollowersIcon from '../../assets/followers.svg'
import StarsIcon from '../../assets/stars.svg'
import RepositoriesIcon from '../../assets/repositories.svg'
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';

const UserDetail: React.FC = () => {

  const user = useSelector((state:RootStore)=> state.UserReducer.data)
  if(user)
    return (
    <>
      <Header/>
      <div className="about-container">
        <div className="user">
          <div className="user__header">
            <figure className="user__avatar">
              <img src="https://avatars.githubusercontent.com/u/22601978?v=4" alt={user.name}/>
            </figure>
            <div className="user__info">
              <h1 className="user__title">{user.name}</h1>
              <span className="user__twitter">{`@${user.twitter}`}</span>
              <p className="user__location">
                <span><img src={LocationIcon} alt="marker"/>{user.location}</span>
                <span><img src={WorkIcon} alt=""/>{user.company}</span>
              </p>
              <p className="user__stars">
                <span><img src={FollowingIcon} alt=""/>{user.following}</span>
                <span><img src={FollowersIcon} alt=""/>{user.followers}</span>
                <span><img src={StarsIcon} alt=""/>10</span>
              </p>
            </div>
            <div className="user__total-repos">
              <span>Total Repositorios</span>
              <p><img src={RepositoriesIcon} alt=""/>{user.totalRepos}</p>
            </div>
          </div>

          <div className="user__repos"></div>
        </div>

      </div>
    </>
  )
  return <div></div>
}

export default UserDetail;