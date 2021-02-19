import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import userContext, { Repository, UserType } from '../../context/user';

import './styles.scss';
import LocationIcon from '../../assets/location.svg'
import WorkIcon from '../../assets/home-work.svg'
import FollowingIcon from '../../assets/following.svg'
import FollowersIcon from '../../assets/followers.svg'
import StarsIcon from '../../assets/stars.svg'
import RepositoriesIcon from '../../assets/repositories.svg'
import ForksIcos from '../../assets/forks.svg'
import LanguageIcon from '../../assets/language.svg'
import { getUser } from '../../services/getUser';
import { getStarred } from '../../services/getStarred';
import { getRepos } from '../../services/getRepos';

interface ParamTypes {
  username: string
}


const UserDetail: React.FC = () => {
  const { state: user, setState } = useContext(userContext)
  let { username } = useParams<ParamTypes>()
  const history = useHistory()

  const getUserData = useCallback(async () => {
    try {
      const user = await getUser(username)
      const stars = await getStarred(username)
      const repos = await getRepos(username)
      const state: UserType = { ...user, starred: stars, repos }
      setState(state)
      console.log('finished setState');



    } catch (error) {
      history.push('/')
    }

  }, [history, setState, username])
  useEffect(() => {
    getUserData()
  }, [getUserData])

  return (
    <>
      <Header />
      <div className="about-container">
        <div className="user">
          <div className="user__header">
            <figure className="user__avatar">
              <img src={user.avatar_url} alt={user.name} />
            </figure>
            <div className="user__info">
              <h1 className="user__title">{user.name}</h1>
              <p className="user__twitter">
                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                  {`@${user.twitter_username}`}
                </a>
              </p>
              <p className="user__location">
                <span><img src={LocationIcon} alt="marker" />{user.location}</span>
                <span><img src={WorkIcon} alt="" />{user.company}</span>
              </p>
              <p className="user__stars">
                <span><img src={FollowingIcon} alt="" />{user.following}</span>
                <span><img src={FollowersIcon} alt="" />{user.followers}</span>
                <span><img src={StarsIcon} alt="" />{user.starred}</span>
              </p>
            </div>
            <div className="user__total-repos">
              <span>Total Repositorios</span>
              <p><img src={RepositoriesIcon} alt="" />{user.total_repos}</p>
            </div>
          </div>

          <div className="user__repos">
            {user.repos.map((repo: Repository) => {
              return (
                <a href={repo.html_url} className="repo" key={repo.id}>
                  <h3 className="repo__name">{repo.name}</h3>
                  <p className="repo__description">{repo.description}</p>
                  <ul className="repo__data">
                    <li><img src={StarsIcon} alt="Stars" /> {repo.stars}</li>
                    <li><img src={ForksIcos} alt="Forks" /> {repo.forks}</li>
                    <li><img src={LanguageIcon} alt="Language" /> {repo.language}</li>
                  </ul>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail;