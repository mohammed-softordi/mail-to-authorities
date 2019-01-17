// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyANfLun-J_dhS4U4z_NoKyGy9yBg60btF4",
    authDomain: "mail-to-authorities.firebaseapp.com",
    databaseURL: "https://mail-to-authorities.firebaseio.com",
    projectId: "mail-to-authorities",
    storageBucket: "mail-to-authorities.appspot.com",
    messagingSenderId: "443458942135"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
