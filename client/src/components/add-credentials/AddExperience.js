import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import {addEducation} from '../../actions/profileActions';

class AddExperience extends Component {
    constructor(props) {
        super(props);
   this.state = {
     displaySocialInputs: false,
     company: '',
     location: '',
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
        company: this.state.company,
        location: this.state.location,
        from: this.state.from,
        to: this.state.to,
        current: this.state.current,
        description: this.state.description,
              
      }

      this.props.AddExperience(registerData, this.props.history);

    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

  render() {
      const {errors, displaySocialInputs} = this.state;



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
            placeholder="* company"
            name="company"
            value={this.state.company} 
            onChange = {this.onChange}
            error={errors.company}
            info = "A unique school for your profile URL. Your full name, company name, nickname"
             />
             <SelectListGroup
             placeholder = "location"
             name = "location"
             value = {this.state.location}
             onChange = {this.onChange}
             error = {errors.location}
             info = "Give us an idea of where you are at in your career" />
             <TextFieldGroup
             placeholder = "Company"
             name = "from"
             value = {this.state.from}
             onChange = {this.onChange}
             error = {errors.from}
             info = "Could be your own company or one you work for" />
            <TextFieldGroup
            placeholder = "to"
            name = "to"
            value = {this.state.to}
            onChange = {this.onChange}
            error = {errors.to}
            info = "City or city & state suggested" />
             <TextFieldGroup
             placeholder = "current"
             name = "current"
             value = {this.state.current}
             onChange = {this.onChange}
             error = {errors.current}
             info = "Please use comma seperated values (eg. HTML, CSS, JAVASCRIPT, PHP" />
             <TextFieldGroup
             placeholder = "Github Username"
             name = "description"
             value = {this.state.description}
             onChange = {this.onChange}
             error = {errors.description}
             info = "If you want your latest repos and a Github link, include your username" />
            
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

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));