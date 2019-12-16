import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/shared.scss';
import Header from './layouts/Header';
import { fetchArticle } from '../actions/articles';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import globals from '../globals';

export class Article extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchArticle();
    }

    render() {
        return (
            <>
                <Header />
                <div className="articles-component component-spacing">
                    <div className="component-heading1 mb-4">Single Article</div>

                </div>
            </>
        )
    }
}

const mapstateToProps = state => ({
    articles: state.articles.article
})

export default connect(mapstateToProps, {fetchArticle})(Article)