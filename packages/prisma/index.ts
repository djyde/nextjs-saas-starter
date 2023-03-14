import { PrismaClient } from '@prisma/client'
export { PrismaClient, Prisma } from '@prisma/client'
// @ts-expect-error
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? [] : ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma