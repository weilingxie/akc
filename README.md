# AKC 

AKC is a responsive, ReactJS powered Single Page Application built for Auckland Kendo Club.

## Author
William(Weiling) Xie

## Contributor
Oscar Xing

## Why ReactJS?

  - If it is a sole webpage, the simplest choice should be pure HTML + CSS, we don't even need Javascript.
  - However, considering in the 2nd phase, we will add content management features, and in the 3rd phase, we aim to add membership management features, framework like ReactJS is needed.

## Website URL
https://akc.org.nz

## Wireframe Design using Figma
https://www.figma.com/file/gpwgIDfeUYBbABmrhcvUKGU9/AKC-Website---Desktop?node-id=0%3A1

## Tech

Auckland Kendo Club Website uses a number of open source projects to work properly:

* [ReactJS] - HTML enhanced for web apps!
* [HTML5] - Latest html version
* [CSS3] - for styling
* [SASS] - make styling easier
* [Github] - version control
* [Gh-Page] - host this website for free

### Installation

AKC requires [Node.js](https://nodejs.org/) v4+ to run.

#### Install the dependencies

```sh
$ cd akc
$ npm install -d
```

#### Config file
Copy config.temp.json to config.json, and edit it accordingly

```sh
    "address":"XXX",
    "email":"XXX@XXX.co.nz",
    "phone":"XXX-XXX-XXXX",
    "upcomingEvent":"event content",
    "facebook":"facebook url",
    "youtube":"youtube channel url",
    "landing-video":"youtube embed url",
    "membership":"registration google form",    
    "email-service":"service_xxxx",
    "email-userId":"user_xxxx",
    "email-template":"template_xxxx"
```

### Start application

```sh
$ npm start
```

This start the application locally, it can be accessed by this url:  http://localhost:3000/akc


#### Build static files for production
For production release:
```sh
$ npm run build
```

#### Create a CNAME file in build folder with content
akc.org.nz

#### Deploy to Github page
After create a gh-page branch in your repository, you can deploy it

```sh
$ npm run deploy
```


### Todos

 - Add Administration feature to manage content
 - Add Membership management features

License
----
MIT