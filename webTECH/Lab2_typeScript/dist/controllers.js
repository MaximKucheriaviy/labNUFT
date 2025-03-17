var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetech from "node-fetch";
import * as fs from "fs/promises";
const url = "https://template-builder.net/test-data/json-files/10kb.json";
export const helloController = (req, res) => {
    res.status(200).send("Hello word");
};
export const fruitController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = JSON.parse(yield fs.readFile("./fruit.json", "utf-8"));
    res.status(200).json(result);
});
export const namesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield fetech(url);
        if (result.status !== 200) {
            throw new Error(result.status.toString());
        }
        const responseArr = (yield result.json());
        res.status(200).json(responseArr);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(`error ${err.message}`);
    }
});
