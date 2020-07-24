import React, { useState, useEffect, useRef } from 'react';

import buildConfig from './buildConfig';

const ChargifyForm = ({ paymentType }) => {
  const chargifyForm = useRef();
  const chargify = useRef(new window.Chargify());
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    chargify.current.token(
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

  const getIframeDocument = (iframeId) => {
    const iframeDiv = document.getElementById(iframeId);
    const iframe = iframeDiv.children[0];

    return iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
  };

  const passEvent = (iframeId, id) => (e) => {
    const el = getIframeDocument(iframeId).getElementById(id);
    el.dispatchEvent(e);
  };

  useEffect(() => {
    chargify.current.load(
      buildConfig(paymentType),
      { onThreeDsConfigError: console.error }, // eslint-disable-line no-console
    );

    return () => {
      chargify.current.unload();
      setToken('');
    }
  }, [chargify, paymentType]);

  return (
    <form onSubmit={handleSubmit} ref={chargifyForm}>
      <div>
        <label>React City:</label>
        <input
          type="text"
          id="react-cfy-city"
          onChange={passEvent('chargify-form', 'cfy-city')}
        />
      </div>

      <div id="chargify-form"></div>
      <div id="chargify-billing"></div>

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
