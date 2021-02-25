# Tool for Author - Editor workflow

Frontend written with Vanilla JavaScript, CSS3 and HTML5. Nothing fancy.\
Backend uses Node.js and Express with MongoDB.

## Installation & Usage
```
npm install
```
This will install all dependencies, which are bcrypt, jsonwebtoken, dotenv, mongoose and express.

You also need to create a .env file in the root of the project and add the following:
```
DB_STRING=*INSERT_YOUR_DB_STRING*
PK=*INSERT_YOUR_PRIVATE_KEY*
```
## File structure

/models - contains the mongoose Schemas
/routes - routes for calling the api
/static - frontend files
/index.js - entry point for node.js


## License
MIT (do whatever you want)