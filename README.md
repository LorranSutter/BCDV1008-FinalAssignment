# Full Chat

Chat application using Node.js and Socket.IO as final Project for BCDV1008 - Full Stack Development III from [Blockchain Development](https://www.georgebrown.ca/programs/blockchain-development-program-t175/) program from [George Brown College](https://www.georgebrown.ca).

This application was developed using [Pug](https://pugjs.org/api/getting-started.html) as frontend template, but also you can check this application implemented in ReactJS [here](https://github.com/LorranSutter/BCDV1017-FinalProject).

<!-- https://www.figma.com/file/vnNwlNAq3iDuazxRo2eULX/Full-Chat?node-id=0%3A1 -->

<div align="center">

<img src="../assets/preview.gif?raw=true" alt="Preview Chat" height=200/>

<img src="https://res.cloudinary.com/lorransutter/image/upload/v1588973266/FullChat_admin.gif" alt="Preview Admin">

</div>

## :pencil2: What is Socket?

A socket is an endpoint of communication between two devices. In other words, when we have two people that want to talk to each other using their mobile phones, a connection is established and each of then becomes a socket, which will be able to send and receive messages in real-time.

In this application, [Socket.IO](https://socket.io/) library was used to establish this communication and messages were able to be exchanged using events.

## :runner: How to run

Open your terminal in the folder you want to clone the project

```bash
# Clone this repo
git clone https://github.com/LorranSutter/FullChat.git

# Go to the project
cd FullChat

# Install dependencies
npm install

# Run the project
npm run start

# Or run using nodemon
npm run devstart
```

## :book: Resources and technologies :computer:

- [ExpressJS](http://expressjs.com/)
- [Moment](https://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Socket.IO](https://socket.io/)
- [Async](https://caolan.github.io/async/v3/)
- [ESlint](https://eslint.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
