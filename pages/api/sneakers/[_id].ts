// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "db.json";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id } = req.query;
  const result = db.find((_sneaker) => _sneaker._id === _id);
  if (!result) {
    res.status(404).json({ error: "Invalid sneaker id" });
  } else {
    res.status(200).json(result);
  }
}
