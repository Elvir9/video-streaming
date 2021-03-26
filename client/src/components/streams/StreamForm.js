import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    )
  }
}

const validateForm = (formValue) => {
  const errors = {}
  if (!formValue.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamsCreate',
  validate: validateForm,
})(StreamForm)
