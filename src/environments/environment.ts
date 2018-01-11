// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAuYR_Cpy0nXbWhu8QTegn6CFEJ6mGaRkE',
    authDomain: 'mbds-projet-angular.firebaseapp.com',
    databaseURL: 'https://mbds-projet-angular.firebaseio.com',
    projectId: 'mbds-projet-angular',
    storageBucket: 'mbds-projet-angular.appspot.com',
    messagingSenderId: '34891410243'
  }
};
