// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getTrendingCompanies } from "../../../lib/companies";
import { Company } from "../../../lib/companies-data";

interface ResponseData {
  data: Company[];
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: getTrendingCompanies() });
}
