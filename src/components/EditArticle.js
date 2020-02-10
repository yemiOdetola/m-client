import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect } from 'react-redux';
import Loader from './utils/Loader';
import Header from './layouts/Header';
import {createArticle} from '../actions/articles';
// import globals from '../globals';

export class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: '',
      description: '',
      tag: '',
      fs: '',
      body: '',
    }
  }

  componentDidMount() {
    if (this.props.match.params.id) {

    } else {

    }
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  onFileChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      this.setState({
        fs: e.target.files[0]
      })
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (!this.state.title || !this.state.description || !this.state.body || !this.state.fs || !this.state.body) {
      this.setState({ loading: false });
      alert('All the fields are compulsory');
    }
    const payload = new FormData();
    payload.append('title', this.state.title);
    payload.append('description', this.state.description);
    payload.append('tag', this.state.tag);
    payload.append('body', this.state.body);
    payload.append('author', this.props.user._id);
    payload.append('feature_img', this.state.fs, this.state.fs.name);
    this.props.createArticle(this.props, payload);
    this.setState({ loading: false });
  }


  render() {
    return (
      <>
        <Header />
        <Loader loading={this.state.loading} />
        <div className="component-spacing">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="form-container mt-4">
                <form onSubmit={this.submitForm} autoComplete="false">
                  <div className="form-item no-radius">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={this.state.title || ''}
                      onChange={e => this.handleChange("title", e.target.value)} />
                  </div>
                  <div className="form-item no-radius">
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" id="description" value={this.state.description || ''}
                      onChange={e => this.handleChange("description", e.target.value)}>
                    </textarea>
                  </div>
                  <div className="form-item upload">
                    <label htmlFor="feature_img">
                      <img src={require('../assets/images/upload.svg')} alt="*" />
                    </label>
                    <input type="file" accept="image/*" name="feature_img" id="feature_img"
                      onChange={(e) => this.onFileChange(e)} />
                    <div className={this.state.fs ? "hide" : "placeholder"}>upload an article banner</div>
                    <div className={this.state.fs ? "placeholder slide-in" : "hide"}>{this.state.fs.name}</div>
                  </div>
                  <div className="form-item no-radius">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" name="tag" id="tag" value={this.state.tag || ''}
                      onChange={e => this.handleChange("tag", e.target.value)} />
                  </div>
                  <div className="form-item">
                    <label htmlFor="bio">Article</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.body}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ body: data })
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>
                  <button type="button"
                    disabled={this.state.loading || this.props.initialized}
                    onClick={this.submitForm}
                    className="bttn primary mt-5 mx-auto">Submit
                    <span className={this.props.initialized ? "loader" : 'hide'}></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.userDetails,
  initialized: state.articles.initialized
})

const mapDispatchToProps = {createArticle}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle)
