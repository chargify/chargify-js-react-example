import React, { useState, Fragment } from 'react';

export const useExternalForm = (fields) => {
  const initialState = Object.keys(fields).reduce((acc, field) => ({ ...acc, [field]: '' }), {});
  const [formData, setFormData] = useState(initialState);
  const setFormDataField = (field) => (value) => setFormData({ ...formData, [field]: value });

  return [formData, setFormDataField];
};

const ExternalForm = ({ fields, formData, setFormDataField }) => (
  <Fragment>
    {Object.keys(fields).map((field) => {
      const fieldData = fields[field];

      return (
        <div key={field}>
          <label>External {fieldData.label}: </label>
          <input
            type="text"
            onChange={({ target }) => setFormDataField(field)(target.value)}
            value={formData[field]}
            placeholder={fieldData.placeholder}
            maxLength={fieldData.maxlength}
          />
        </div>
      );
    })}
  </Fragment>
);

export default ExternalForm
