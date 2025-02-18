import fetech from "node-fetch";
import * as fs from "fs/promises";
import { Request, Response } from "express";

const url: string =
  "https://template-builder.net/test-data/json-files/10kb.json";

export const helloController = (req: Request, res: Response) => {
  res.status(200).send("Hello word");
};

export const fruitController = async (req: Request, res: Response) => {
  const result = JSON.parse(
    await fs.readFile("./fruit.json", "utf-8")
  ) as Fruit;
  res.status(200).json(result);
};

export const namesController = async (req: Request, res: Response) => {
  try {
    const result = await fetech(url);
    if (result.status !== 200) {
      throw new Error(result.status.toString());
    }
    const responseArr = (await result.json()) as personResponse;
    const response = responseArr
      .map((item: Person) => `${item.name} ${item.phoneNumber} ${item.email}`)
      .join("<br>");
    res.status(200).send(response);
  } catch (err: any) {
    console.log(err);

    res.status(400).send(`error ${err.message}`);
  }
};
