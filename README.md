<h1 align="center"> :sparkles: Note Taker :sparkles: </h1>

![license](https://img.shields.io/badge/license-MIT-blue.svg)
![Language](https://img.shields.io/badge/Languages-HTML,CSS,Jquery,Nodes-violet.svg)
![Command-line](https://img.shields.io/badge/Command-line-blueviolet.svg)
![Express](https://img.shields.io/badge/Express-turquoise.svg)
![npm](https://img.shields.io/badge/npm-red.svg)
![npm](https://img.shields.io/badge/npm-install-grey.svg)
![node](https://img.shields.io/badge/node-green.svg)
![api](https://img.shields.io/badge/api-yellow.svg)
![JSON](https://img.shields.io/badge/JSON-orange.svg)
![VisualStudioCode](https://img.shields.io/badge/VSC-darkblue.svg)




## :memo: Description:

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the Heroku Guide for getting your app deployed on Heroku.


### :camera: Visuals:
[images](./public/assets/css/note.png)


### :computer: Installation:

The following `HTML` routes should be created:

- GET `/notes`- Should return the `notes.html` file.
- GET `*` - Should return the `index.html` file

The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

The following API routes should be created as follows:

- GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
- POST `/api/notes` - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

- DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given id property, and then rewrite the notes to the `db.json` file.

- Terminal
- Visual Studio Code
- Git Lab
- Heroku
- npm init
- npm install


###  Usage:

`node server.js`


### :wave: Contributing:

Pull requests are welcome. For major changes,<br>
please open an issue first to discuss what you would like to change.<br>
Please make sure to update tests as appropriate.


### :octocat: Profile:

[GitHub](https://github.com/adpir/Note_Taker) All rights reserved.



### :copyright: License

[MIT](https://github.com/adpir/Note_Taker/blob/main/LICENSE)
