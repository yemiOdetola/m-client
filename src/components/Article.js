import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import globals from '../globals';
import Header from './layouts/Header';
import Loader from './utils/Loader';
import '../assets/styles/components/article.scss';
import { fetchArticle, addToFavorites, removeFromFavorites, fetchComments, removeComment, writeComment } from '../actions/articles';


export class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            id: '',
            rows: 1,
            comment: ''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchArticle(id);
        this.props.fetchComments(id);
        this.setState({ id });
    }

    addToFav = () => {
        const payload = {
            userId: this.props.article.author._id
        }
        this.props.addToFavorites(this.state.id, payload);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    removeFromFav = () => {
        this.props.removeFromFavorites(this.state.id);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    deleteComment = (id) => {
        const payload = {
            comment_id: id
        }
        this.props.removeComment(this.state.id, payload);
    }

    submitForm = (e) => {
        e.preventDefault();
        const payload = {
            body: this.state.comment,
            author: this.props.article.author._id,
            article: this.state.id
        }
        this.props.writeComment(payload);
        setTimeout(() => {
            this.setState({
                comment: ''
            })
        }, 500)
    }

    commentFocus = () => {
        this.setState({ rows: 4 })
    }

    commentBlur = () => {
        this.setState({ rows: 1 })
    }

    render() {
        if (!this.props.article.author) return <Loader loading={this.state.loading} />
        let comments = [];
        if (this.props.comments[0] && this.props.comments[0].length > 0) {
            this.props.comments[0].forEach((comment, i) => {
                comments.push(
                    <div key={i} className="comment">
                        {/* <div className="delete" onClick={() => this.deleteComment(comment._id)}>
                            <img src={require('../assets/images/trash.svg')} alt="#" />
                        </div> */}
                        <div className="body">{comment.body}</div>
                        <div className="author">
                            <img src={comment.author.avatar || require('../assets/images/menu.svg')} alt="author" />
                            <div className="user">
                                <Link to={`/user/${comment.author._id}`} className="name">{comment.author.name}</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <>
                <Loader loading={this.props.initiated} />
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
                                className={globals.checkFavorite(this.props.article.favorites, this.props.userDetails._id) ? 'hide' : 'favorite'} onClick={this.addToFav} alt="" />
                            <img src={require('../assets/images/bookmarked.svg')}
                                className={globals.checkFavorite(this.props.article.favorites, this.props.userDetails._id) ? 'favorite' : 'hide'} onClick={this.removeFromFav} alt="" />
                        </div>
                    </div>
                    <figure className="feature-img">
                        <img src={this.props.article.feature_img} alt={this.props.feature_img} />
                    </figure>
                    <div className="description">{this.props.article.description}</div>
                    <div className="body">{this.props.article.body}</div>
                    <div className="body">
                        <h2 className="component-heading1">Comments</h2>
                        <div className="new-comment">
                            <form>
                                <textarea
                                    className={this.state.rows > 1 ? "slide-in" : ''}
                                    placeholder={`Write a comment @${this.props.userDetails.username}`}
                                    rows={this.state.rows}
                                    value={this.state.comment}
                                    onChange={(e) => this.setState({ comment: e.target.value })}
                                    onFocus={this.commentFocus}></textarea>
                                <button type="click" className='ml-auto mr-3 slide-in bttn primary' onClick={this.submitForm}>Submit</button>
                            </form>
                        </div>
                        <div className="comments">
                            {comments}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Article.prototypes = {
    article: PropTypes.object.isRequired,
    fetchArticle: PropTypes.func.isRequired
}

const mapDispatch = {
    fetchArticle, addToFavorites, removeFromFavorites, fetchComments, removeComment, writeComment
}
const mapstateToProps = state => ({
    article: state.articles.article,
    userDetails: state.auth.userDetails,
    initiated: state.articles.initiated,
    comments: state.articles.comments
})

export default connect(mapstateToProps, mapDispatch)(Article);