import React, { useState, useEffect } from "react";

export default function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // "https://official-joke-api.appspot.com/random_joke"
        "https://black-codher-simple-server.richardcrng.repl.co/about-me"
      );
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Here is a random fact about me:</h1>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
      {/* {apiData ? <pre>{JSON.stringify(apiData, null, 2)}</pre> : 'loading...'} */}
    </div>
  );
}