import { Inter } from "@next/font/google";
import { getTrendingCompaniesSummary } from "../lib/company-selectors";
import { CompanyList } from "./_components/company-list";
import classes from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const companiesSummary = getTrendingCompaniesSummary();
  return (
    <main className={`${inter.className} ${classes.page}`}>
      <section className={classes.panel}>
        <header className={classes.header}>
          <h1 className={classes.title}>Trending companies</h1>
        </header>
        <CompanyList companiesSummary={companiesSummary} />
      </section>
    </main>
  );
}
