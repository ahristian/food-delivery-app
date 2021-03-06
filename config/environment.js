'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'food-delivery-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    firebase: {
      apiKey: "AIzaSyCOAs709NKtjkystOYtbNxSFlPMAcPNZk4",
      authDomain: "food-delivery-app-d6445.firebaseapp.com",
      databaseURL: "https://food-delivery-app-d6445-default-rtdb.firebaseio.com",
      projectId: "food-delivery-app-d6445",
      storageBucket: "food-delivery-app-d6445.appspot.com",
      messagingSenderId: "108947778395",
      appId: "1:108947778395:web:fca4d39bc433b2d48d487e",
      measurementId: "G-ZEB0QF267M"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
