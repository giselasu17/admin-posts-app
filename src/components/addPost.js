import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createPost } from '../actions/actions';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categories: '',
            content: ''
        }
    }

    onSubmit = (values) => {
        this.props.createPost(values)
            .then(() => {
                this.context.router.push('/');
            });
    }

    renderField = (field)  => {
        const className =  `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
        return (
            <div className = {className}>
                <label>{field.label}</label>
                <input {...field.input} type = {field.type} className = "form-control"/>
                <div className = "text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }
    render () {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit = {handleSubmit(this.onSubmit)}>
                <h3>Create A New Post</h3>
                <Field 
                    type = "text" 
                    label = "Title" 
                    name = "title" 
                    component = {this.renderField}/>
                <Field 
                    type = "text" 
                    label = "Categories" 
                    name = "categories" 
                    component = {this.renderField}/>
                <Field 
                    type = "text" 
                    label = "Content" 
                    name = "content" 
                    component = {this.renderField}/> 
                <button type = "submit" className = "btn btn-primary">Submit</button>
                <Link to = "/" className = "btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Field empty';
    }
    if (!values.categories) {
        errors.categories = 'Field empty';
    }
    if (!values.content) {
        errors.content = 'Field empty';
    }
    return errors;
} 

AddPost.contextTypes = {
    router: PropTypes.object.isRequired
}

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({ 
    form: 'PostNewForm',
    validate
})(
    connect(null, {createPost: createPost})(AddPost)
);