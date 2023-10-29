import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Karleen Richards</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Portfolio" />
      </Helmet>
    </div>
  );
}

export default App;
