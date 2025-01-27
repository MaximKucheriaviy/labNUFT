import fetech from "node-fetch";
import * as fs from "fs/promises";

const url =
  "https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json";

export const helloController = (req, res) => {
  res.status(200).send("Hello word");
};

export const fruitController = async (req, res) => {
  const result = JSON.parse(await fs.readFile("./fruit.json", "utf-8"));
  res.status(200).json(result);
};

export const namesController = async (req, res) => {
  try {
    const result = await fetech(url);
    if (result.status !== 200) {
      throw new Error(result.status);
    }
    const response = (await result.json())
      .map((item) => `${item.given_name} ${item.family_name} ${item.email}`)
      .join("<br>");
    res.status(200).send(response);
  } catch (err) {
    console.log(err);

    res.status(400).send(`error ${err.message}`);
  }
};
