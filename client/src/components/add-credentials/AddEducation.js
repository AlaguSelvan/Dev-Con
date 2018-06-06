import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import {addEducation} from '../../actions/profileActions';
  
class AddEducation extends Component {
    constructor(props) {
        super(props);
   this.state = {
     displaySocialInputs: false,
     school: '',
     degree: '',
     fieldofstudy: '',
     from: '',
     to: '',
     current: '',
     description: '',
     errors: {}
   };
          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
    }

    onSubmit(e) {
      e.preventDefault();
      
      const registerData = {
        school: this.state.school,
        degree: this.state.degree,
        fieldofstudy: this.state.fieldofstudy,
        from: this.state.from,
        to: this.state.to,
        current: this.state.current,
        description: this.state.description
       
      }

      this.props.AddExperience(registerData, this.props.history);

    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

  render() {
      const {errors, displaySocialInputs} = this.state;

      let socialInputs;

      if(displaySocialInputs) {
        socialInputs = (
          <div>
            <InputGroup 
            placeholder="school"
            name="school"
            icon="fab fa-user"
            value={this.state.school}
            onChange={this.onChange}
            error={errors.school}
            />
         
            <InputGroup 
            placeholder="degree"
            name="degree"
            icon="fab fa-user"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
            />
         
            <InputGroup 
            placeholder="fieldofstudy"
            name="fieldofstudy"
            icon="fab fa-user"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
            />
            <InputGroup 
            placeholder="from"
            name="from"
            icon="fab fa-user"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
            />
             <InputGroup 
            placeholder="to"
            name="to"
            icon="fab fa-user"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            />
          </div>
        )
      }

    

    return (
      
      <div className="create-profile">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <a href="/dashboard" className="btn btn-light">
            Go Back
          </a>
          <h1 className="display-4 text-center">Edit Your Profile</h1>
          <p className="lead text-center">Let's get some information to make your profile stand out</p>
          <small className="d-block pb-3">* required field</small>
          <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* school"
            name="school"
            value={this.state.school} 
            onChange = {this.onChange}
            error={errors.school}
            info = "A unique school for your profile URL. Your full name, company name, nickname"
             />
             <SelectListGroup
             placeholder = "degree"
             name = "degree"
             value = {this.state.degree}
             onChange = {this.onChange}
             error = {errors.degree}
             info = "Give us an idea of where you are at in your career" />
             <TextFieldGroup
             placeholder = "Company"
             name = "fieldofstudy"
             value = {this.state.fieldofstudy}
             onChange = {this.onChange}
             error = {errors.fieldofstudy}
             info = "Could be your own company or one you work for" />
            <TextFieldGroup
            placeholder = "Website"
            name = "website"
            value = {this.state.website}
            onChange = {this.onChange}
            error = {errors.website}
            info = "City or city & state suggested" />
             <TextFieldGroup
             placeholder = "Skills"
             name = "skills"
             value = {this.state.skills}
             onChange = {this.onChange}
             error = {errors.skills}
             info = "Please use comma seperated values (eg. HTML, CSS, JAVASCRIPT, PHP" />
             <TextFieldGroup
             placeholder = "Github Username"
             name = "githubusername"
             value = {this.state.githubusername}
             onChange = {this.onChange}
             error = {errors.githubusername}
             info = "If you want your latest repos and a Github link, include your username" />
            <TextAreaFieldGroup
             placeholder = "Short Bio"
             name = "bio"
             value = {this.state.bio}
             onChange = {this.onChange}
             error = {errors.bio}
             info = "Tell us a little about yourself" />


             <div className="mb-3">
                <button
                type="button"
                 onClick={()=>{
                  this.setState(prevState =>({
                    displaySocialInputs: !prevState.displaySocialInputs
                  }))
                }} className="btn btn-light">
                  Add Social Network Links
                </button>
                <span className="text-muted">Optional</span>
            </div>
            {socialInputs}
          <input type="submit" value="Submit" className="btn btn-info btn-block"/>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));