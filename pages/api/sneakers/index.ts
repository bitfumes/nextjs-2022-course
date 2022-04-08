// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Sneaker } from "types/sneakers";
import connectToDatabase from "util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Sneaker[]>
) {
  const _db = await connectToDatabase();
  const brand = req.query.brand as string;
  let sneakers: Sneaker[] = [];
  if (brand) {
    sneakers = await _db
      .collection("sneakers")
      .find({ brand: brand.toLowerCase() })
      .collation({ strength: 2, locale: "en" })
      .toArray();
  } else {
    sneakers = await _db.collection("sneakers").find().toArray();
  }
  res.status(200).json(sneakers);
}
