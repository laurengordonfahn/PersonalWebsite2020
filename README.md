# Personal Website

## Project Description:

Personal Website is a static, responsive, React application. 
Personal Website is built with compartmentalized code that enables anyone's personal information to be loaded quickly into React state variables and instantly presented in a clean website format.

Featuring responsive long scroll and menu scroll nav.

## Features:
1) Responsive Long Scroll
2) Menu Scroll Nav
3) Reusable components for general website design

## Getting Started:

## Prerequisites:

# Prerequisites General Information:
Personal Website is a static node.js React application.
This means that you will need node/create-react-app dependencies. 
Node and React's dependencies are found in package.json. You will need either node's npm or yarn installer to successfully download the libraries noted in packages.json.

# Prerequisites Steps:
1) Download the project in a directory of its own. Navigate into the new directory and type in the following command.  
```
    $ git clone git@github.com:laurengordonfahn/personalWebsite.git
```

2) Download package.json dependencies using yarn OR npm. The following command will source all dependencies in package.json. If you are not certain if you have yarn visit https://yarnpkg.com/lang/en/docs/install/.  Yarn will create yarn.lock which will show you all sub-dependencies utilized. Yarn also offers 'yarn upgrade' a command that will help you keep dependency libraries up-to-date. 
```
    $ yarn install
```
If using npm :
```
    $npm install
```
3) For your information these are the project requirements found in the package.json file

```
{
  "name": "personal_website",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^15.6.0",
    "react-dom": "^15.6.0",
    "react-onscroll": "^1.0.4",
    "react-scroll": "^1.5.3",
    "react-timeout": "^1.0.1"
  },
  "devDependencies": {
    "react-scripts": "1.0.7"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

4) Note that package.json was first sourced off of create-react-app. If you want to read more: https://github.com/facebookincubator/create-react-app/blob/master/README.md

## Installing:

1) To run the front-end:
```
    $ yarn run 
```
If using npm
```
    $ npm start
``` 

## Built With:

* Javascript- Front end language
* React - Front end Framework

## Author:
* Lauren Gordon-Fahn

