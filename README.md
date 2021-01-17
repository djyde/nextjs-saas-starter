# nextjs-saas-starter

WIP...

## Features

- [x] NextAuth
- [x] Prisma
- [x] Chakra UI
- [x] GraphQL
- [ ] Payment

## Usage

Create a `.env` file with:

```bash
# your pg database url
DB_URL=

# Auth provider
GITHUB_ID=
GITHUB_SECRET=
```

Then run:

```bash
$ yarn db:migrate # create initial db migration

$ yarn db:generate # generate prisma client

$ yarn dev
```

### GraphQL

#### Add a resolver

To add a resolver, create a [TypeGraphQL resolver class](https://typegraphql.com/docs/resolvers.html) file in `gql/resolvers`. Then add this resolver to  `api/gql.ts`:

```diff
// api/gql.ts
const schema = await buildSchema({
  resolvers: [
    InitResolver,
+   AnotherResolver
  ],
});
```

#### Add a prisma resolver

https://github.com/MichalLytek/typegraphql-prisma#custom-operations

- [Additional decorators for Prisma schema resolvers](https://github.com/MichalLytek/typegraphql-prisma#additional-decorators-for-prisma-schema-resolvers)
- [Additional decorators for Prisma schema classes and fields](https://github.com/MichalLytek/typegraphql-prisma#additional-decorators-for-prisma-schema-classes-and-fields)