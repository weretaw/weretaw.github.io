// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCd29YeaTCi9rB54ltcAHrDYuI1xvxp4o8",
    authDomain: "recruitment-collaboration.firebaseapp.com",
    databaseURL: "https://recruitment-collaboration.firebaseio.com",
    projectId: "recruitment-collaboration",
    storageBucket: "recruitment-collaboration.appspot.com",
    messagingSenderId: "292230634028"
  }
};
