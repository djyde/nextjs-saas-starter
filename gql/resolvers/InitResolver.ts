import { PrismaClient } from "@prisma/client";
import { Ctx, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { User } from '@generated/type-graphql'
import type { GqlContext } from "../../utils";
@Service()
@Resolver()
export default class InitResolver {

  @Query(returns => String)
  sayHello(@Ctx() ctx: GqlContext) {
    return 'hello'
  }

  @Query(returns => [User])
  async getUsers(@Ctx() ctx) {
    const prisma = ctx.prisma as PrismaClient
    const res = await prisma.user.findMany()
    return res
  }
}
