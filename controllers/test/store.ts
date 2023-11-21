import crypto from "crypto";
import { Request, Response } from "express";
import httpStatus from "http-status";

import { testService } from "../../services";

type Params = unknown;
type ResBody = unknown;
type ReqBody = {
  id: string;
  encryptionKey: string;
  value: JSON;
};
type ReqQuery = unknown;

export const store = async (
  req: Request<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {
  console.log(req.body);
  const { id, encryptionKey, value } = req.body;
  // Generate initial vector
  const iv = crypto.randomBytes(32).toString("hex");
  try {
    const cipher = crypto.createCipheriv("aes-256-gcm", encryptionKey, iv);
    // Generate string from JSON
    const plain = JSON.stringify(value);
    // Encrypt
    let encryptedValue = cipher.update(plain, "utf-8", "hex");
    encryptedValue += cipher.final("hex");

    const item = await testService.getItemById(id);
    if (item) {
      await testService.updateItem({ id: id, content: encryptedValue, iv: iv });
    } else {
      await testService.createItem({ id: id, content: encryptedValue, iv: iv });
    }
    return res.status(httpStatus.OK).json("OK");
  } catch (err: any) {
    console.error(err);
    return res.status(httpStatus.BAD_REQUEST).send([]);
  }
};
