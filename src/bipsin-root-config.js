import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () =>
//     System.import(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   activeWhen: ['/'],
// });

// registerApplication({
//   name: "@bipsin/navbar",
//   app: () => System.import("@bipsin/navbar"),
//   activeWhen: ["/"]
// });

registerApplication(
  "@bipsin/demo-nav",
  () => System.import("@bipsin/demo-nav"),
  isActive.nav
);

registerApplication(
  "@bipsin/demo-page1",
  () => System.import("@bipsin/demo-page1"),
  isActive.page1
);

registerApplication(
  "@bipsin/demo-page2",
  () => System.import("@bipsin/demo-page2"),
  isActive.page2
);

start({
  urlRerouteOnly: true,
});
