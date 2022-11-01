import { PrismaClient } from "@prisma/client";
import { singletonSync } from "./utils.server";

export const prisma = singletonSync("prisma", () => {
  return new PrismaClient();
});