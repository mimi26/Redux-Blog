import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form>
                    <Field
                        label="Title For Post"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                </form>
            </div>
        );
    }
}

function validate(values) {
   const errors = {};
   //validate the iputs from 'values'.
   if (!values.title) {
       errors.title = "Enter a title";
   }
   if (!values.categories) {
       errors.categories = 'Enter some categories';
   }
   if (!values.content) {
       errors.content = 'Enter some content please';
   }
   //if errors stays empty, the form is fine to submit.
   //if errors has *any* properties redux assumes form is invalid.
   return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);