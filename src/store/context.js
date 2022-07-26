import React, { useState, useEffect } from "react";

import { companies_information, company_stock_prices } from "../config/data";

const StoreContext = React.createContext({
  companies: [],
  stocks: {},
  industry: [],
});

export const StoreContextProvider = (props) => {
  const [isCompany, setCompany] = useState([]);
  const [isStocks, setStocks] = useState({});
  const [isIndustry, setIndustry] = useState([]);

  useEffect(() => {
    const industryName = [];
    // sort by popularity index descending order
    const sortedCompanies = companies_information.sort(
      (a, b) => parseFloat(b.popularityIndex) - parseFloat(a.popularityIndex)
    );

    //get all industry names
    for (let i = 0; i < companies_information.length; i++) {
      if (companies_information[i].industry) {
        industryName.push(companies_information[i].industry);
      }
    }
    // remove dublicates from industry names
    const filtereDuplicates = industryName.filter((element, index) => {
      return industryName.indexOf(element) === index;
    });

    setCompany(sortedCompanies);
    setStocks(company_stock_prices);
    setIndustry(filtereDuplicates);
  }, []);

  return (
    <StoreContext.Provider
      value={{ companies: isCompany, stocks: isStocks, industries: isIndustry }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
