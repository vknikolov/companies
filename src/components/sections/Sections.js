import React, { useContext, useMemo } from "react";
import StoreContext from "../../store/context";
import Card from "../card/Card";

const Sections = (props) => {
  const { companies, stocks } = useContext(StoreContext);

  return useMemo(() => {
    return (
      <>
        {companies &&
          companies.map(
            (company, i) =>
              props.industryFilter === company.industry && (
                <Card
                  key={i}
                  {...company}
                  status={stocks[company.company_id]?.volume}
                  price={stocks[company.company_id]?.price || "N/A"}
                />
              )
          )}
      </>
    );
  }, [companies, stocks, props.industryFilter]);
};

export default Sections;
