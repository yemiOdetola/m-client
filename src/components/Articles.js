import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/articles.scss';
import '../assets/styles/shared.scss';
import Header from './layouts/Header';
import PropTypes from 'prop-types';
import { fetchArticles } from '../actions/articles';
import globals from '../globals';

export class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmark: false,
            userId: '5ddba1c9ba0b85579c87b474'
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchArticles();
    }

    toggleToggle = () => {
        return this.setState({
            bookmark: !this.state.bookmark
        })
    }

    render() {
        const articles = [];
        this.props.articles.forEach((article, index) => {
            articles.push(
                <article className="article" key={index}>
                    <Link to={`/article/${article._id}`}>
                        <div className="feature-img">
                            {article.feature_img ?
                                <img src={article.feature_img} alt={article.name} /> :
                                <img src={require('../assets/images/404.svg')} alt="not found" />
                            }
                        </div>
                        <div className="details">
                            <div className="tag"><span className="hash">#</span>{article.tag}</div>
                            <h2 className="title">{globals.capitalize(article.title)}</h2>
                            <div className="description">{article.description}</div>
                            <div className="others">
                                <div className="author-time">
                                    <div className="info author">by {globals.capitalize(article.author.username)} on {globals.converToLocal(article.createdAt)}</div>
                                </div>
                                <div className="actions">
                                    <img src={require('../assets/images/unbookmark.svg')}
                                        className={globals.checkFavorite(article.favorites, this.state.userId) ? 'hide' : 'favorite'} onClick={this.toggleToggle} alt="" />
                                    <img src={require('../assets/images/bookmarked.svg')}
                                        className={globals.checkFavorite(article.favorites, this.state.userId) ? 'favorite' : 'hide'} onClick={this.toggleToggle} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
            )
        })
        return (
            <>
                <Header />
                <div className="articles-component component-spacing">
                    <div className="component-heading1 mb-4">All Articles</div>
                    <div className="row">
                        <div className="col-lg-8">{articles}</div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="each-bar most-viewed">
                                    <div className="header">
                                        <h3 className="title">Most interactions!!!</h3>
                                        <div className="illustration-mello">
                                            <img src={require('../assets/images/mello.svg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="body">
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">01</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">02</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">03</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">04</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                        <article className="article-preview">
                                            <div className="icon">
                                                <div className="index">05</div>
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">The Influencer and the Hit Man: How a Years-Long Domain Name Feud Ended in a Bloody Shootout</h3>
                                                <div className="author">Brotha in #druckas</div>
                                                <div className="extras">Dec 10 2015</div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="each-bar popular-tags">
                                    <div className="bar-header"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


Articles.propTypes = {
    articles: PropTypes.array.isRequired,
    fetchArticles: PropTypes.func.isRequired
}

const mapstateToProps = state => ({
    articles: state.articles.articles,
    user: state.auth.user
})

export default connect(mapstateToProps, { fetchArticles })(Articles)