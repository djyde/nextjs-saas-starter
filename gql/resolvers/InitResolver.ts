import { Query, Resolver } from "type-graphql";

@Resolver()
export default class InitResolver {

  @Query(returns => String)
  sayHello() {
    return 'hello'
  }
}
