#BRAINSTORM LIST
- [ ] Users can play each other remotely from different consoles
- [ ] User Experience (UX) stays consistent regardless of machine used
- [ ] Game Servers maintain game logic integrity
- [ ] Setting up a database to record scores and players

#SPECIFIC EXAMPLES/DECISIONS
- [ ] How can users find each other on a network
- [ ] How many players can play per game?
- [ ] How many games are bing played at any given point?
- [ ] List of different games and difficulty levels listed prior to joining a game
- [ ] Game chat infrastructure
- [ ] Private games on network
- [ ] Networked log of highest scores on Tic Tac Toe

#VALUES/PRINCIPLES
- [ ] Restrict user's choices - too many options complicate the user interaction with the game.
- [ ] Design principle: access to the game servers should be on a corner of the screen.
- [ ] What would the user want(game server) vs how would the user want it(clear directions)
- [ ] Simplicity
- [ ] Familiar feel
- [ ] Decide on one way to implement a game server, or a combination of tools.
  - [ ] Websockets & node.js
  - [ ] Unity
  - [ ] Smart Fox Server - maybe for a super tic tac toe game 

#RESOURCES
- [ ] Database choice
- [ ] Existing game databases or platforms (i.e. steam, etc)
- [ ] Remote user interviews
- [ ] Chat software or framework

#BLUEPRINT
- [ ] Set up database to scale?
- [ ] Set up server with hosting service
- [ ] Use some node framework, such as gameapi-node.js, to set up communication between client-side and server-side
