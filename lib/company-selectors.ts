import { Company, companies } from "./company-data";

export interface CompanySummary
  extends Pick<Company, "logoDarkUrl" | "companyId" | "companyName" | "description" | "infoUrl"> {}

export function getTrendingCompaniesSummary(): CompanySummary[] {
  return companies.map(({ logoDarkUrl, companyId, companyName, description, infoUrl }) => ({
    logoDarkUrl,
    companyId,
    companyName,
    description,
    infoUrl,
  }));
}

export function getTrendingCompanies(): Company[] {
  return companies;
}
