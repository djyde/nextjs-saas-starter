# nextjs-saas-starter

WIP...

## Features

- [x] NextAuth
- [x] Prisma
- [x] Chakra UI
- [ ] GraphQL

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