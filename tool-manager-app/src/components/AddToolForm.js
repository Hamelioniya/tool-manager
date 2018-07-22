import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddToolForm = (props) => {
  const { handleSubmit, close, errors } = props

  return (
    <form onSubmit={handleSubmit} align="center">
      <div>
        <div>
          <label>Name</label>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Tool Name"
            />
        </div>
        <div>
          <label>Type</label>
            <Field name="type" component="select">
              <option />
              <option value="drill">Drill</option>
              <option value="cutter">Cutter</option>
              <option value="mill">Mill</option>
            </Field>
        </div>

        <div>
          <label>Location</label>
            <Field name="location" component="select">
              <option />
              <option value="box A">Box A</option>
              <option value="box B">Box B</option>
            </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={Object.keys(errors).length !== 0}>Save</button>
        <button type="button" onClick={close}>Close</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'add'
})(AddToolForm)