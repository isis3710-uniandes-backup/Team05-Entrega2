# Printear - Proyecto Programación Web


[NodeJS](https://nodejs.org/en/) - [NPM](https://www.npmjs.com/get-npm) o [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
<br/>
Una vez desplegada la aplicación, se puede utilizar siendo un usuario cliente, quien puede realizar pedidos y ver el estado de éstos. O se puede utilizar siendo un administrador, quien puede agregar tiendas papeleras y puede ver los pedidos que tiene cada una de ellas.

> [Video](https://youtu.be/wBJjLQFR-g8)


> [Sitio Web](https://printear.herokuapp.com)



### Deployment

```ssh
$ git clone repo
$ nano repo/server/.env
``` 

Llave de acceso a la base de datos MongoDB - Mlab. Debe estar en archivo **.env** preferible dentro del directorio **/server**
> MLAB=mongodb://grupo5:printeardb123@ds123500.mlab.com:23500/printeardb

```ssh
$ cd repo/
$ npm start
``` 

Error: posiblemente falta el archivo .env con la llave de acceso a Mlab




<hr/>



### Deployment - Server


```ssh
$ cd server/
$ npm start
``` 


<hr/>


### Deployment - Client


```ssh
$ cd client/
$ npm start
``` 


<hr/>


### File directory

```ssh
.
├── package.json  # -> Management and dependencies, application deployment
├── .gitignore    # -> Specifies intentionally untracked files to ignore
├── Procfile      # -> Heroku commands that are executed by the app on startup
├── yarn.lock     # -> Yarn dependencies
│
├── server
│   ├── server.js     # -> Backend entry point
│   ├── test.js
│   ├── package.json
│   ├── .gitignore
│   ├── .env
│   ├── models        # -> MongoDB Models
│   |   └── user.js
│   |   └── ...
│   └── routes        # -> Express URL Routing
│       ├── users.js
│       ├── user.test.rest
│       └── ...
|
└── client
    ├── package.json
    ├── .gitignore
    ├── src
    │   ├── index.js            # -> React DOM Render entry point
    │   ├── index.css
    │   ├── serviceWorker.js    # -> React web performance advantages
    │   └── App                 # -> React Components
    │       ├── _Index
    │       |   └── App.js
    │       |   └── App.test.js
    │       |   └── App.css
    │       |   └── Home.js
    │       ├── User
    │       |   └── User.js
    │       |   └── User.css
    │       └── ...
    └── public
        └── index.html          # -> Frontend entry point
    
``` 
