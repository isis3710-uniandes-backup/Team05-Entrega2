# Printear - Proyecto Programación Web


### Deployment

```ssh

$ git clone repo
$ nano repo/server/.env

``` 

MLAB=mongodb://grupo5:mlab123@ds129811.mlab.com:29811/01000110

```ssh

$ cd repo/
$ npm start

``` 

<hr/>

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
└──── client
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
