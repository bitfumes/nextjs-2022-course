// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const sneakers = await _db.collection("sneakers").find().toArray();
  res.status(200).json(sneakers);
}
