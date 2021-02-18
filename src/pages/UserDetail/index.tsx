import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import userContext from '../../context/user';

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

interface ParamTypes {
  username: string
}

const UserDetail: React.FC = () => {
  const { state: user, setState } = useContext(userContext)
  let { username } = useParams<ParamTypes>()
  const history = useHistory()

  async function setStared() {
    const length = await getStarred(username)
    setState({ ...user, starred: length })
  }
  async function getUserData() {
    try {
      const user = await getUser(username)
      setState(user)

    } catch (error) {
      history.push('/')
    }
  }
  async function fetchReposList() {

  }

  useEffect(() => {
    console.log(username, user.id)

    if (user.id === -1) {
      getUserData()
      // getUser(username).then(response => {
      //   setState(response)
      // }).catch(error => {
      //   history.push('/')
      // })
    }
    setStared()
    fetchReposList()


  }, [])
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
              <p className="user__twitter">@flaquer_</p>


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
            <div className="repo">
              <h3 className="repo__name">Repositorio</h3>
              <p className="repo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores?</p>
              <ul className="repo__data">
                <li><img src={StarsIcon} alt="Stars" /> 12</li>
                <li><img src={ForksIcos} alt="Forks" /> 12</li>
                <li><img src={LanguageIcon} alt="Language" /> 12</li>
              </ul>
            </div>
            <div className="repo">
              <h3 className="repo__name">Repositorio</h3>
              <p className="repo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores?</p>
              <ul className="repo__data">
                <li><img src={StarsIcon} alt="Stars" /> 12</li>
                <li><img src={ForksIcos} alt="Forks" /> 12</li>
                <li><img src={LanguageIcon} alt="Language" /> 12</li>
              </ul>
            </div>
            <div className="repo">
              <h3 className="repo__name">Repositorio</h3>
              <p className="repo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores?</p>
              <ul className="repo__data">
                <li><img src={StarsIcon} alt="Stars" /> 12</li>
                <li><img src={ForksIcos} alt="Forks" /> 12</li>
                <li><img src={LanguageIcon} alt="Language" /> 12</li>
              </ul>
            </div>
            <div className="repo">
              <h3 className="repo__name">Repositorio</h3>
              <p className="repo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores?</p>
              <ul className="repo__data">
                <li><img src={StarsIcon} alt="Stars" /> 12</li>
                <li><img src={ForksIcos} alt="Forks" /> 12</li>
                <li><img src={LanguageIcon} alt="Language" /> 12</li>
              </ul>
            </div>
            <div className="repo">
              <h3 className="repo__name">Repositorio</h3>
              <p className="repo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores?</p>
              <ul className="repo__data">
                <li><img src={StarsIcon} alt="Stars" /> 12</li>
                <li><img src={ForksIcos} alt="Forks" /> 12</li>
                <li><img src={LanguageIcon} alt="Language" /> 12</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default UserDetail;