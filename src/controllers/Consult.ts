import { Request, Response } from "express";
import { consultarCep } from "correios-brasil";

export const consultCEP = async (request: Request, response: Response) => {
  const { code } = request.params;
  const consult = await consultarCep(code);
  response.json(consult);
};
