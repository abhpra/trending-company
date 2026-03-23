import React from "react";
import { CompanyCard } from "../../components/company-card/company-card";
import { CompanySummary } from "../../lib/company-selectors";
import classes from "./company-list.module.css";

type CompanyListProps = {
  companiesSummary: CompanySummary[];
};

export function CompanyList({ companiesSummary }: CompanyListProps) {
  if (companiesSummary.length === 0) {
    return <p>No companies available right now.</p>;
  }

  return (
    <ul className={classes.companyList}>
      {companiesSummary.map((company: CompanySummary) => (
        <li key={company.companyId} className={classes.companyListItem}>
          <CompanyCard
            title={company.companyName}
            description={company.description}
            imageUrl={company.logoDarkUrl}
            href={company.infoUrl}
            external
            allowWidth={180}
          />
        </li>
      ))}
    </ul>
  );
}
