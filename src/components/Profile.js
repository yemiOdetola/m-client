import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './layouts/Header';
import '../assets/styles/components/profile.scss';

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      active: 'articles',
      id: '',
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id })
  }

  activateMenu = (menu) => {
    this.setState({ active: menu })
  }

  render() {
    return (
      <>
        <Header />
        <div className="profile-component component-spacing">
          <div className="profile-card">
            <div className="header"></div>
            <div className="profile-img">
              <img src={require('../assets/images/rotation.svg')} alt="#" />
            </div>
            <div className="stats">
              <div className="stat">
                <div className="val">231</div>
                <div className="tag">Articles</div>
              </div>
              <div className="stat">
                <div className="val">9</div>
                <div className="tag">Following</div>
              </div>
              <div className="stat">
                <div className="val">900</div>
                <div className="tag">Favorites</div>
              </div>
            </div>
            <div className="socials">
              <div className="social">
                <img src={require('../assets/images/twitter.svg')} alt="#" />
                <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">@yemiOtola</a>
              </div>
              <div className="social">
                <img src={require('../assets/images/flame.svg')} alt="#" />
                <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">@zodaicZinna</a>
              </div>
              <div className="social">
                <img src={require('../assets/images/facebook.svg')} alt="#" />
                <a href={`https://twitter.com/yemiotola`} target="_blank" rel="noopener noreferrer">Azah Onisoya</a>
              </div>
            </div>
            <div className="user-details">
              <div className="name">Giannis Antentokoumpo</div>
              <div className="bio">UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)</div>
            </div>
          </div>
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
                  <div className="article">
                    <Link to={`/articles`}>
                      <div className="title">seRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async</div>
                      <div className="desc">This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)</div>
                    </Link>
                  </div>
                  <div className="article">
                    <Link to={`/articles`}>
                      <div className="title">seRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async</div>
                      <div className="desc">This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)</div>
                    </Link>
                  </div>
                </div>
                : ''}
              {this.state.active === 'following' ?
                <div className="slide-in">
                  <div className="follow">
                    <img src={require('../assets/images/flame.svg')} alt="#" />
                    <div className="content">
                      <div className="name">/\lvin Smurphs</div>
                      <div className="bio">
                        This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
                      </div>
                      <button className="bttn small actions">follow</button>
                    </div>
                  </div>
                  <div className="follow">
                    <img src={require('../assets/images/flame.svg')} alt="#" />
                    <div className="content">
                      <div className="name">/\lvin Smurphs</div>
                      <div className="bio">
                        This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
                      </div>
                      <button className="bttn small actions">follow</button>
                    </div>
                  </div>
                  <div className="follow">
                    <img src={require('../assets/images/flame.svg')} alt="#" />
                    <div className="content">
                      <div className="name">/\lvin Smurphs</div>
                      <div className="bio">
                        This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
                      </div>
                      <button className="bttn small actions">follow</button>
                    </div>
                  </div>
                </div>
                : ''}
              {this.state.active === 'favorites' ?
                <div className="slide-in">
                  <div className="article fav">
                    <div className="fav">
                      <img src={require('../assets/images/bookmarked.svg')} alt="#" />
                    </div>
                    <Link to={`/articles`}>
                      <div className="title">seRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async</div>
                      <div className="desc">This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)</div>
                    </Link>
                  </div>
                  <div className="article fav">
                    <Link to={`/articles`}>
                      <div className="title">seRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async</div>
                      <div className="desc">This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)</div>
                    </Link>
                  </div>
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

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
