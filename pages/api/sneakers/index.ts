// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "db.json";
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "util/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const _db = await connectToDatabase();
  res.status(200).json(db);
}
