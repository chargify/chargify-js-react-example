const buildConfig = (paymentType) => ({
  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: 'chjs_xbprm6339jws575vw9wh2xym',

  // form type (possible values: 'card' or 'bank')
  type: paymentType || 'card',

  // points to your Chargify site
  serverHost: 'https://generic-multi-gateway.chargify.test',
  // Enable 3D secure
  threeDSecure: true,

  fields: {
    firstName: {
      selector: '#chargify-form',
      label: 'First Name',
      placeholder: 'John',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
    },

    lastName: {
      selector: '#chargify-form',
      label: 'Last Name',
      placeholder: 'Doe',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
    },

    number: {
      selector: '#chargify-form',
      label: 'Number',
      placeholder: 'xxxx xxxx xxxx xxxx',
      message: 'This field is not valid. Please update it.'
    },

    month: {
      selector: '#chargify-form',
      label: 'Mon',
      placeholder: 'mm',
      message: 'This field is not valid. Please update it.'
    },

    year: {
      selector: '#chargify-form',
      label: 'Year',
      placeholder: 'yy',
      message: 'This field is not valid. Please update it.'
    },

    cvv: {
      selector: '#chargify-form',
      label: 'CVV code',
      placeholder: 'yy',
      required: true,
      message: 'This field is not valid. Please update it.'
    },

    address: {
      selector: '#chargify-billing',
      label: 'Address',
      placeholder: '1234 Hill St',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '70'
    },

    city: {
      selector: '#chargify-billing',
      label: 'City',
      placeholder: 'Austin',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '30'
    },

    state: {
      selector: '#chargify-billing',
      label: 'State',
      placeholder: 'TX',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '2'
    },

    zip: {
      selector: '#chargify-billing',
      label: 'Zip Code',
      placeholder: '10001',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '5'
    },

    country: {
      selector: '#chargify-billing',
      label: 'Country',
      placeholder: 'US', // ISO 3166-1 alpha-2
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '2'
    },
  },
});

export default buildConfig;
