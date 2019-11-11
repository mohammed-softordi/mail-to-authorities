import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import { AppModule } from './app/app.module';

const ngLifecycles = singleSpaAngular({
    domElementGetter,
    AppModule,
    angularPlatform: platformBrowserDynamic(),
    template: `<mail-to-authority />`,
});

export const bootstrap = [
    ngLifecycles.bootstrap,
];

export const mount = [
    ngLifecycles.mount,
];

export const unmount = [
    ngLifecycles.unmount,
];

function domElementGetter() {
    return document.getElementById('mail-to-authority-app');
}
