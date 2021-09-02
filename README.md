# Adminpro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# Comentarios de los avances

Primero comentar que la coneción a mongo con el wizzard que entrega no funciono, por lo tanto busque información variada para poder saber el problema por el cual no se conectaba  mostrando el mensaje "queryTxt ETIMEOUT cluster0.kj6g6.mongodb.net".
La conexión que me dio el wizzard de mongodb Atlas es "mongodb+srv://<username>:<password>@cluster0.kj6g6.mongodb.net/test" en la cual se deben colcoar el usuario y su clave, pero no funiono, siempre entrego el mensaje "queryTxt ETIMEOUT cluster0.kj6g6.mongodb.net".

Mensaje que no entontré solución en la web al menos en todo lo que busque.

Hasta que decidi revisar el sigueinte vídeo "https://www.youtube.com/watch?v=keTtL5fFO0Y" el cual dice por titulo "🍀MongoDB🍀02🍀Como instalar Compass🍃 y conectar con Atlas"

En donde enseño a configurar la conexión utilizando la opción "Fill in connection fields individually" en donde coloco el cluster primario, este cluster primario y el resto se pueden obtener en mongodb Atlas
