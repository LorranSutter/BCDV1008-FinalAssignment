# Full Chat

Chat application using Node.js and Socket.IO as final Project for BCDV1008 - Full Stack Development III from [Blockchain Development](https://www.georgebrown.ca/programs/blockchain-development-program-t175/) program from [George Brown College](https://www.georgebrown.ca).

This application was developed using [Pug](https://pugjs.org/api/getting-started.html) as frontend template, but also you can check this application implemented in ReactJS [here](https://github.com/LorranSutter/FullChat-React).

<div align="center">

<img src="../assets/preview.gif?raw=true" alt="Preview Chat" height=200/>

<img src="https://res.cloudinary.com/lorransutter/image/upload/v1588973266/FullChat_admin.gif" alt="Preview Admin">

</div>

## :straight_ruler: Development pipeline and challenges

Dealing with anxiety during development It was time to start doing things in a better way.

1. After watch some videos from [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/featured), a tool that they always employs caught my eyes: [Figma](https://www.figma.com/): a free, powerfull and handy tool to aid designers to create, for example, wireframes for your new website. Wait a minute... I always get stuck with interface while developing, trying to create great interfaces and program at the same time. It was a great opportunity to establish a pipeline. This is the reason because Figma suits me perfectly.

   You can check my wireframe made in Figma [here](https://www.figma.com/file/vnNwlNAq3iDuazxRo2eULX/Full-Chat?node-id=0%3A1) (with some changes during the development of course).

2. This application did not require clearly split between frontend and backend. If it was the case, surley I would start creating the API. However, as it is not the case and I am a visual person, it decided to create the pages using HTML and CSS. Yeah... I said above I used Pug, but I was expecting use only static pages at the beginning. I had to change everything afterwards.

3. Interface done, time to create the backend project using Express. I am not sure about that, but I think that after start express step I just realized that using static pages was not the best idea. Of course I had to develop the project further before finally changing that.

4. Backend done, frontend done (moved to pug finally)... let's deployt to Heroku. And here it is the [deploy](http://bcdv1008-fullchat.herokuapp.com/).

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

- [Figma](https://www.figma.com/)
- [ExpressJS](http://expressjs.com/)
- [Moment](https://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Socket.IO](https://socket.io/)
- [Async](https://caolan.github.io/async/v3/)
- [ESlint](https://eslint.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
