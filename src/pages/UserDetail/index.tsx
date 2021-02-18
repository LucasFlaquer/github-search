import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

interface ParamTypes {
  username: string
}

const UserDetail: React.FC = () => {
  const { state: user } = useContext(userContext)

  let { username } = useParams<ParamTypes>()
  useEffect(() => {
    console.log(username, user.id)
    //se id for == -1
    //buscar ususario
    //se invalido redirecionar para home
  }, [])
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="user">
          <div className="user__header">
            <figure className="user__avatar">
              <img src="https://avatars.githubusercontent.com/u/22601978?v=4" alt='Lucas Flaquer' />
            </figure>
            <div className="user__info">
              <h1 className="user__title">Lucas Flaquer</h1>
              <p className="user__twitter">@flaquer_</p>


              <p className="user__location">
                <span><img src={LocationIcon} alt="marker" />Sorocaba | SP</span>
                <span><img src={WorkIcon} alt="" />CRB Construtora</span>
              </p>
              <p className="user__stars">
                <span><img src={FollowingIcon} alt="" />10</span>
                <span><img src={FollowersIcon} alt="" />50</span>
                <span><img src={StarsIcon} alt="" />10</span>
              </p>
            </div>
            <div className="user__total-repos">
              <span>Total Repositorios</span>
              <p><img src={RepositoriesIcon} alt="" />48</p>
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