import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {TOOL_TYPES, TOOL_LOCATIONS} from './constants';
import validate from './validate';

const ToolForm = ({ handleSubmit, onSave, onClose, valid }) => {
  return (
    <form onSubmit={handleSubmit(onSave)} align="center">
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
              {TOOL_TYPES.map((type) => <option value={type}>{type}</option>)}
            </Field>
        </div>

        <div>
          <label>Location</label>
            <Field name="location" component="select">
              <option />
              {TOOL_LOCATIONS.map((location) => <option value={location}>{location}</option>)}
            </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={!valid}>Save</button>
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </form>
  );
};

const withForm = reduxForm({
  form: 'toolForm',
  validate,
});

export default withForm(ToolForm)