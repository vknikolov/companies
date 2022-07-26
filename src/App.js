import React, { useContext } from "react";
import StoreContext from "./store/context";

import classes from "./App.module.css";
import Layout from "./components/layout/Layout";
import Sections from "./components/sections/Sections";

function App() {
  const { industries } = useContext(StoreContext);
  return (
    <div className="App">
      <div>
        <p>
          1: The companies should be render in different columns based on their
          `industry` and sorted by popularityIndex 2: If we don’t have `price`
          for the specific company in the `company_stock_prices` we just render
          `N/A`
        </p>
        <p>
          2: If the volume is - `UP` the company should have a green border on
          the left side - `DOWN` the company should have a red border on the
          left side - does not exist the company should have a gray border on
          the left side Once finished, you push the code on a GitHub repository
          and send us the link by email. If you would like to show us other
          things or go further on some subjects, don't hesitate to do it and to
          mention it in your email.
        </p>
      </div>
      <Layout>
        <h1>Companies</h1>
        <ul className={classes.list}>
          {industries &&
            industries.map((industry, i) => {
              return (
                <li key={i}>
                  <h2>{industry}</h2>
                  <Sections industryFilter={industry} />
                </li>
              );
            })}
        </ul>
      </Layout>
    </div>
  );
}

export default App;
