// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
<<<<<<< HEAD
    keys(): string[];
    <T>(id: string): T;
=======
    <T>(id: string): T;
    keys(): string[];
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
<<<<<<< HEAD
  { teardown: { destroyAfterEach: true }},
=======
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
<<<<<<< HEAD
context.keys().map(context);
=======
context.keys().forEach(context);
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
