import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './layouts/Header';
import { fetchArticle } from '../actions/articles';
import globals from '../globals';
import '../assets/styles/components/article.scss';
import Loader from './utils/Loader';


export class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '5ddba1c9ba0b85579c87b474',
            loading: true
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchArticle(id);
    }
    render() {
        if (!this.props.article.author) return <Loader loading={this.state.loading}/>
        return (
            <>
                <Header />
                <div className="article-component component-spacing">
                    <h1 className="title">{this.props.article.title}</h1>
                    <div className="user-share">
                        <div className="user">
                            <div className="profile-img">
                                <img src={this.props.article.author.avatar} alt="" />
                            </div>
                            <div className="others">
                                <div className="name">{this.props.article.author.name}</div>
                                <div className="follow"><button className="bttn small actions">follow</button></div>
                            </div>
                        </div>
                        <div className="social-favorite">
                            <img src={require('../assets/images/facebook.svg')} alt="facebook share" />
                            <img src={require('../assets/images/twitter.svg')} alt="twitter share" />
                            <img src={require('../assets/images/unbookmark.svg')}
                                className={globals.checkFavorite(this.props.article.favorites, this.state.userId) ? 'hide' : 'favorite'} alt="" />
                            <img src={require('../assets/images/bookmarked.svg')}
                                className={globals.checkFavorite(this.props.article.favorites, this.state.userId) ? 'favorite' : 'hide'} alt="" />
                        </div>
                    </div>
                    <figure className="feature-img">
                        <img src={this.props.article.feature_img} alt={this.props.feature_img} />
                    </figure>
                    <div className="description">{this.props.article.description}</div>
                    <div className="body">{this.props.article.body}</div>

                </div>
            </>
        )
    }
}

Article.prototypes = {
    article: PropTypes.object.isRequired,
    fetchArticle: PropTypes.func.isRequired
}

const mapstateToProps = state => ({
    article: state.articles.article
})

export default connect(mapstateToProps, { fetchArticle })(Article);