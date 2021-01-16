import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../utils";

@Resolver()
export default class InitResolver {

  @Query(returns => String)
  sayHello(@Ctx() ctx: Context) {
    console.log(ctx.prisma)
    return 'hello'
  }
}
