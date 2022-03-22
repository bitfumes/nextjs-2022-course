// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import db from "db.json";
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "util/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id } = req.query;
  const _db = await connectToDatabase();
  const sneaker = await _db.collection("sneakers").findOne({ _id });
  if (!sneaker) {
    res.status(404).json({ error: "Invalid sneaker id" });
  } else {
    res.status(200).json(sneaker);
  }
}
