import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

class StreamCreate extends React.Component {
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
    this.props.createStream(formValues)
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

const formWrapped = reduxForm({
  form: 'streamsCreate',
  validate: validateForm,
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)
