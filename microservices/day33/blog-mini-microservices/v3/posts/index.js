const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  //post gets a post from the UI-React App, stores it in it's array, and then broadcasts a message
  //this message is being broadcasted to event-bus, as the port no mentioned is 4005

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});
//when the event-bus re-broadcasts this message, the post service doesnt care about it
//it simply prints a message, and sends back an empty acknowledgement to events-bus

app.listen(4000, () => {
  console.log("Listening on 4000");
});
