# Geckos-Team-26

(A Chingu Voyage-4 remote development team)

## The Project

A web app to help pet owners record their pet's progress, keep track of essential information, and provide reminders of important events and milestones.

## Meet the team:

* [Toni Gibbons](https://github.com/8thDay)
* [Craig Sweaton](https://github.com/Fixy250185/)
* [Garrus](https://github.com/GarrusNapp)
* [Maíra Martins K](https://github.com/mairamartinsk)

## How to start the app

Run the following commands to install dependencies for both the client and server

* `npm run installserver`
* `npm run installclient`

Run this command to start the dev environment:

* `npm run dev`

The dev script begins by running ESLint. If the dev environment fails to start, please check the console for lint errors/warnings.

If you get any errors related to nodemon, then please install it globally by running this command, and try again.

* `npm install -g nodemon`

Please run the following command to update any new dependecies:

* `npm run updateall`

### More Information

[How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

## Style Guide

* [Airbnb Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide)
* [Prettier](https://prettier.io)

ESLint will run automatically each time you run the dev script. Errors and warnings will be displayed in the console. If errors are present, the dev environment will not start. Please resolve the errors and try again.

The following commands can be run in order to lint the code without starting the dev environment:

* `npm run lint:client`
* `npm run lint:server`

ESLint's formatting rules are disabled. Style formatting is handled by Prettier, using a precommit hook.  
Prettier will re-format staged files during the commit process.  
It is recommended that you also [integrate Prettier into your code editor](https://prettier.io/docs/en/editors.html), so that you can take advantage of Prettier's functionality in real time, as you code.
