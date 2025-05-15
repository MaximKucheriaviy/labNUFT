import fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = JSON.parse(
    await fs.readFile("./data/fruit.json", "utf-8")
  ) as Fruit;
  res.status(200).json(result);
}
