import React, { useState, useEffect, useRef } from 'react';

import ExternalForm, { useExternalForm } from './ExternalForm';
import buildConfig from './buildConfig';

const ChargifyForm = ({ paymentType }) => {
  const chargifyForm = useRef();
  const chargify = useRef(new window.Chargify());
  const [token, setToken] = useState('');
  const config = buildConfig(paymentType);
  const [formData, setFormDataField] = useExternalForm(config.fields);

  useEffect(() => {
    chargify.current.load(config, { onThreeDsConfigError: console.error }); // eslint-disable-line no-console

    return () => {
      chargify.current.unload();
      setToken('');
    };
  }, [chargify, paymentType]);

  const handleSubmit = (e) => {
    e.preventDefault();

    chargify.current._internal.token(formData)(
      chargifyForm.current,
      (token) => {
        console.log('{host} token SUCCESS - token: ', token);
        setToken(token);
      },
      (error) => {
        console.log('{host} token ERROR - err: ', error);
      }
    );
  };

  const hiddenStyle = {
    visibility: 'hidden',
    height: 0,
    width: 0,
  };

  return (
    <form onSubmit={handleSubmit} ref={chargifyForm}>
      <div style={hiddenStyle} id="chargify-form"></div>
      <div style={hiddenStyle} id="chargify-billing"></div>

      <ExternalForm
        fields={config.fields}
        formData={formData}
        setFormDataField={setFormDataField}
      />

      <label>
        Hidden Token: <input id="host-token" disabled value={token}/>
      </label>

      <p>
        <button type="submit">Submit Host Form</button>
      </p>
    </form>
  );
};

export default ChargifyForm;
