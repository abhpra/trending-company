import type { NextApiRequest, NextApiResponse } from "next";

import { CompanySummary, getTrendingCompaniesSummary } from "../../../lib/companies";

interface ResponseData {
  data: CompanySummary[];
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: getTrendingCompaniesSummary() });
}
