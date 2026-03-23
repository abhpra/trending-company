// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getTrendingCompanies } from "../../../lib/company-selectors";
import { Company } from "../../../lib/company-data";

interface ResponseData {
  data: Company[];
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: getTrendingCompanies() });
}
