# Ionic PWA Starter
A starter for ionic progressive web apps with some extras specific to desktop / tablet / mobile development. This starter assumes that the application being developed will
NOT be developed as a mobile application and therefor the default `@ionic` native scripts have been removed.

The start template consists primarily of custom directives and componets that might be useful in developement for a desktop to mobile website. This includes

    - Centering Content
    - Large Flat style
    - Desktop toolbar menu
    - Split pane extras

For more information see the [projects wiki](https://github.com/IsaacSomething/ionic-pwa-starter/wiki)

#### Service Workers

By default the `service-worker.js` script code is commented out, this is because the service worker caches files and that is not ideal when developing an app. Uncomment the code when you want to push to production.
checkout [workbox](https://developers.google.com/web/tools/workbox/)

#### Roadmap
 - [Capacitor](https://capacitor.ionicframework.com/docs/basics/progressive-web-app)
