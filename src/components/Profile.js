import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './layouts/Header';
import Loader from './utils/Loader';
import globals from '../globals';
import '../assets/styles/components/profile.scss';
import { userFollows } from '../actions/auth';
import { fetchAuthorized, fetchFavs } from '../actions/articles';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      active: 'articles',
      id: '',
      user: {}
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.userrr(id);
  }

  userrr = (id) => {
    const userToken = localStorage.getItem('mcUserToken');
    axios.get(`${globals.BASE_URL}/users/user/${id}`, {
      headers: {
        'Authorization': userToken
      }
    })
      .then(response => {
        if (response.success === false) {
          return console.log(response, 'not successful');
        }
        const res = response.data.user;
        console.log(res);
        this.setState({
          user: res
        })
        console.log(this.state.user);
        if (res.following && res.following.length > 0) {
          res.following.forEach(f => {
            this.props.userFollows(f);
          })
        }
        if (res.articles && res.articles.length > 0) {
          res.articles.forEach(a => {
            this.props.fetchAuthorized(a);
          })
        }
        if (res.favorites && res.favorites.length > 0) {
          res.favorites.forEach(f => {
            this.props.fetchFavs(f);
          })
        }
      })
      .catch(error => {
        console.log('catch error register', error);
        throw (error);
      })
  }

  activateMenu = (menu) => {
    this.setState({ active: menu })
  }


  render() {
    let following = [];
    let favorites = [];
    let authorized = [];
    if (!this.state.user.name) return <Loader loading={this.state.loading} />
    if (this.props.following.length > 0) {
      this.props.following.forEach((follow, i) => {
        following.push(
          <div key={i} className="follow">
            <img src={follow.avatar ? follow.avatar : require('../assets/images/menu.svg')} alt="#" />
            <div className="content">
              <div className="name">{follow.name}</div>
              <div className="bio">{follow.bio ? follow.bio : '...'}</div>
              <button className="bttn small danger-pill">unfollow</button>
            </div>
          </div>
        )
      })
    }
    if (this.props.favs && this.props.favs.length > 0) {
      this.props.favs.forEach((fav, i) => {
        favorites.push(
          <div key={i} className="article fav">
            <div className="fav">
              <img src={require('../assets/images/bookmarked.svg')} alt="#" />
            </div>
            <Link to={`/article/${fav._id}`}>
              <div className="title">{globals.trimTitle(fav.title)}</div>
              <div className="desc">{globals.trimSubtitle(fav.description)}</div>
            </Link>
          </div>
        )
      })
    }

    if (this.props.authorized && this.props.authorized.length > 0) {
      this.props.authorized.forEach((auth, i) => {
        authorized.push(
          <div key={i} className="article">
            <Link to={`/article/${auth._id}`}>
              <div className="title">{globals.trimTitle(auth.title)}</div>
              <div className="desc">{globals.trimSubtitle(auth.description)}</div>
            </Link>
          </div>
        )
      })
    }
    return (
      <>
        <Header />
        <div className="profile-component component-spacing">
          {this.state.user && this.state.user.articles ?
            <div className="profile-card">
              <div className="header"></div>
              <div className="profile-img">
                <img src={require('../assets/images/rotation.svg')} alt="#" />
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="val">{this.state.user.following && this.state.user.following.length > 0 ?
                    this.state.user.following.length : 0}</div>
                  <div className="tag">Following</div>
                </div>
                <div className="stat">
                  <div className="val">{this.state.user.favorites && this.state.user.favorites.length > 0 ?
                    this.state.user.favorites.length : 0}</div>
                  <div className="tag">Favorites</div>
                </div>
                <div className="stat">
                  <div className="val">{this.state.user.articles.length || 0}</div>
                  <div className="tag">Articles</div>
                </div>
              </div>
              <div className="socials">
                {/* <div className={this.state.user.birdapp ? "social" : 'hide'}> */}
                <div className="social">
                  <img src={require('../assets/images/twitter.svg')} alt="#" />
                  <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">@yemiOtola</a>
                </div>
                {/* <div className={this.state.user.gram ? "social" : 'hide'}> */}
                <div className="social">
                  <img src={require('../assets/images/flame.svg')} alt="#" />
                  <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">@zodaicZinna</a>
                </div>
                {/* <div className={this.state.user.facebook ? "social" : 'hide'}> */}
                <div className="social">
                  <img src={require('../assets/images/facebook.svg')} alt="#" />
                  <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">Azah Onisoya</a>
                </div>
              </div>
              <div className="user-details">
                <div className="name">{this.state.user.name}</div>
                <div className="bio">{this.state.user.bio}</div>
              </div>
            </div> : <Loader loading={true} />}
          <div className="arts">
            <div className="menu">
              <div onClick={() => this.activateMenu('articles')}
                className={this.state.active === 'articles' ? "menu-item active" : 'menu-item'}>
                <span>Articles</span>
                <div className="indicator"></div>
              </div>
              <div onClick={() => this.activateMenu('following')}
                className={this.state.active === 'following' ? "menu-item active" : 'menu-item'}>
                <span>Following</span>
                <div className="indicator"></div>
              </div>
              <div onClick={() => this.activateMenu('favorites')}
                className={this.state.active === 'favorites' ? "menu-item active" : 'menu-item'}>
                <span>Favorites</span>
                <div className="indicator"></div>
              </div>
            </div>
            <div className="content">
              {this.state.active === 'articles' ?
                <div className="slide-in">
                  {authorized}
                </div>
                : ''}
              {this.state.active === 'following' ?
                <div className="slide-in">
                  {following}
                </div>
                : ''}
              {this.state.active === 'favorites' ?
                <div className="slide-in">
                  {favorites}
                </div>
                :
                <>
                  <div className="empty">
                    <img src={require('../assets/images/empty-ride.svg')} alt="()" />
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  userr: state.auth.userr,
  following: state.auth.following,
  authorized: state.articles.authorized,
  favs: state.articles.favorites,
})

const mapDispatchToProps = {
  userFollows,
  fetchAuthorized,
  fetchFavs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
