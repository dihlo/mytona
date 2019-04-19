This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## INSTALL PROJECT

`npm install`<br>
`yarn install`

## START PROJECT

### 1. `npm run json-server`
Runs the json-server.<br>
Open [http://localhost:3015](http://localhost:3015/portfolio) to view it in the browser.

### 2. `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project structure
<!-- toc -->
- index.js - connect store and router
- App.js - realized routing and render all components
  * components/TopMenu.js - view of topmenu
  * components/Home.js - view of Home page
    + components/BigPicture.js - render big picture with my face 
  * components/About.js
  * components/Contacts.js - view of contacts 
  * components/About.js - view of about
  * components/Portfolio.js - rendering all projects do request get to json-server api 
    + components/Pagenator.js - rendering Cards, you can change 
    + components/Card - rendering single Card
    + components/Modal - rendering Modal with components/Add.js, components/Edit.js, components/Delete.js depending on which button was pressed
  * components/CardInfo.js - rendering one detailed project   
<!-- tocstop -->    
