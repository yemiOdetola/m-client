import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect } from 'react-redux';
import Loader from './utils/Loader';
import Header from './layouts/Header';
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
    console.log(e.target.files);
    if (e.target.files.length > 0) {
      this.setState({
        fs: e.target.files[0]
      })
    }
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
                    <div className={this.state.fs ? "placeholder" : "hide"}>{this.state.fs.name}</div>
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
                      onInit={editor => {
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({body: data})
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle)
