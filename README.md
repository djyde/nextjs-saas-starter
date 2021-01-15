# nextjs-starter

## Features

- [x] NextAuth
- [x] Prisma
- [] Chakra UI

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
$ yarn db:push # if you don't need migration

$ yarn db:migrate # create initial db migration

$ yarn db:generate # generate prisma client

$ yarn dev
```
