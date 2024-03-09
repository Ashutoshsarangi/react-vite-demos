import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setLoading(true);
      setError("");
      try {
        const resp = await axios.get(`/api/v1/jokes?search=${search}`, {
          signal: controller.signal,
        });
        console.log(resp.data);
        setJokes(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    })();
    return () => {
      controller.abort(); // Cancel The request, I beleve we search and change the route in this case it will cancel
      // the extra api calls
      // To Prove it I need to test it in a route anabled application.
    };
  }, [search]);

  return (
    <>
      <h1>Axios Demo | Ashu</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <h1>Some thing Went Wrong</h1>}
      {loading && <h1>Loading....</h1>}
      <ul>
        {jokes.map((joke) => {
          return (
            <li key={joke.id}>
              {joke.title} --- {joke.description}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
