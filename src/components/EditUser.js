import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import globals from '../globals';
import Loader from './utils/Loader';
import Header from './layouts/Header';
import { profileDetails, editProfile } from '../actions/auth';

export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: '',
      bio: '',
      password: '',
      instagram: '',
      facebook: '',
      twitter: '',
    }
  }
  componentDidMount() {
    if (localStorage.getItem('mcUserToken')) {
      this.profileDetails();
    } else {
      this.props.history.push('/login');
    }
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  profileDetails = () => {
    this.setState({
      loading: true
    })
    const userToken = localStorage.getItem('mcUserToken');
    axios.get(`${globals.BASE_URL}/users/profile`, {
      headers: {
        'Authorization': userToken
      }
    })
      .then(response => {
        if (response.success === false) {
          return console.log(response, 'not successful');
        }
        const res = response.data.user;
        this.setState({
          name: res.name,
          bio: res.bio,
          twitter: res.twitter,
          facebook: res.facebook,
          instagram: res.instagram,
          loading: false,
        })
      })
      .catch(error => {
        console.log('catch error register', error);
        throw (error);
      })
  }

  submitForm = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    if (!this.state.name || !this.state.bio) { return }
    let payload = {
      name: this.state.name,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      password: this.state.password,
    }
    this.props.editProfile(this.props, payload);
    this.setState({ loading: false });
  }

  render() {
    return (
      <>
        <Header />
        <Loader loading={this.state.loading} />
        <div className="component-spacing">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="form-container mt-4">
                <form onSubmit={this.submitForm} autoComplete="false">
                  <div className="form-item">
                    <label htmlFor="email">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name || ''}
                      onChange={e => this.handleChange("name", e.target.value)} />
                  </div>
                  <div className="form-item">
                    <label htmlFor="bio">Bio</label>
                    <textarea rows="5" id="bio" value={this.state.bio || ''}
                      onChange={e => this.handleChange("bio", e.target.value)}>
                    </textarea>
                  </div>
                  <div className="form-item">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" name="twitter" id="twitter" value={this.state.twitter || ''}
                      onChange={e => this.handleChange("twitter", e.target.value)} />
                  </div>
                  <div className="form-item">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" name="facebook" id="facebook" value={this.state.facebook || ''}
                      onChange={e => this.handleChange("facebook", e.target.value)} />
                  </div>
                  <div className="form-item">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" name="instagram" id="instagram" value={this.state.instagram || ''}
                      onChange={e => this.handleChange("instagram", e.target.value)} />
                  </div>
                  <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                      onChange={e => this.handleChange("password", e.target.value)} />
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

const mapStateToProps = (state) => ({
  user: state.auth.userDetails,
  initialized: state.auth.initialized,
})

const mapDispatchToProps = { profileDetails, editProfile, }

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
