import { PrismaClient } from "@prisma/client";
import { Ctx, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { GqlContext } from "../../utils";

// export interface GqlContext {
//   prisma: PrismaClient;
//   session?: any;
// }

@Service()
@Resolver()
export default class InitResolver {

  @Query(returns => String)
  sayHello(@Ctx() ctx: GqlContext) {
    return 'hello'
  }
}
