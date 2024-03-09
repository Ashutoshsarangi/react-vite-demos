import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    { id: "111", title: "Joke 1", description: "This is Joke 1 Description." },
    { id: "112", title: "Joke 2", description: "This is Joke 2 Description." },
    { id: "113", title: "Joke 3", description: "This is Joke 3 Description." },
    { id: "114", title: "Joke 4", description: "This is Joke 4 Description." },
    { id: "115", title: "Joke 5", description: "This is Joke 5 Description." },
  ];
  const searchQuery = req.query["search"];
  console.log(searchQuery);
  if (searchQuery) {
    res.json(jokes.filter((joke) => joke.description.includes(searchQuery)));
    return;
  }
  setTimeout(() => {
    res.json(jokes);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
