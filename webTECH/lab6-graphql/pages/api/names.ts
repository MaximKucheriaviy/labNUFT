import type { NextApiRequest, NextApiResponse } from "next";

const url: string =
  "https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await fetch(url);
    if (result.status !== 200) {
      throw new Error(result.status.toString());
    }
    const responseArr = (await result.json()) as personResponse;

    res.status(200).json(responseArr);
  } catch (err: any) {
    console.log(err);
    res.status(400).send(`error ${err.message}`);
  }
}
