# ProyectoAngular

* Buscador de usuarios de GitHub: versión en Angular

Práctica realizada en el módulo Desarrollo Web en Entorno Cliente, donde se desarrolla una aplicación *Angular* para *buscar usuarios de GitHub*. Se introduce el *nombre de usuario* en un *campo de texto* y si el usuario no existe, se muestra un mensaje indicándolo; si el usuario existe, se muestra su *login*, la *imagen de avatar* y un *enlace* a su *página personal de GitHub*.

Para obtener los datos se utiliza la *API de GitHub*. Con la URL ~https://api.github.com/users/{USER}~, siendo ~{USER}~ el nombre de usuario.

Los datos devueltos por la API están en formato *JSON*. La petición a la URL indicada devuelve un *objeto* con un conjunto de propiedades. Las propiedades que almacenan la información pedida son:
- ~login~ - Almacena el login del usario.
- ~avatar_url~ - Almacena la ruta a la imagen de avatar del usuario.
- ~html_url~ - Almacena la página personal de GitHub del usuario.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
