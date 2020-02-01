import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CashForm = props => {
  const { handleSubmit, pristine, submitting, reset } = props

  const onSubmit = event => {
    handleSubmit(event)
    reset()
  }

  return (
      <form onSubmit={onSubmit}>
        <div>
          <Field
              name="count"
              component="input"
              type="number"
              placeholder="0"
              value={10}
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Add
          </button>
        </div>
      </form>
  )
}

export default reduxForm({
  form: 'cash-form' // a unique identifier for this form
})(CashForm)
