# Video Streaming Service

## Managing Service

In order to run this microservice, you should do the following (all commands should be run from the microservice catalog):

1. `npm install --omit=dev` - install production dependencies (all except dev - development)
2. `PORT=3000 node src/index.js` - run application server from console 'as is'
3. `export PORT=3000; node src/index.js` - same as above, different notation for the env variable
4. `PORT=3000 npm start` - run application by common Node.js convention, this script is set up in the file **package.json**
5. `` - 

## Developing Microservice

1. `npm install` - install all dependencies (production + development)
2. `npm run start:dev` - run locally this microservice with node monitor that will reload the application on code changes
3. ???
