# Angular Dynamic Styleguide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). It has been updated to Angular version 12.x.

It is a minimal example of an Angular StyleGuide containing examples that are compiled dynamically (at runtime). Dynamic compilation is used because it provides access to the Angular template source code, which is displayed in the styleguide.

A key goal for this demo project was to get dynamically compiled components running with `ng build --prod` or `ng serve --prod`. Thanks to [this comment in github](https://github.com/angular/angular/issues/27584#issuecomment-446462051) I found that the key fix was to add `import 'core-js/es7/reflect';` to polyfills.ts. Even though it's not a real polyfill (it's needed on all browsers), it's required for dynamic compilation in --prod builds.

Note that running dynamically compiled components with `ng build --prod` also requires

```json
              "buildOptimizer": false,
```
in the `production` configuration in `angular.json`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
